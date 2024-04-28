<?php

namespace App\Http\Controllers\Distributor;

use App\Http\Controllers\Controller;
use App\Http\Requests\Customer\AddToCartRequest;
use App\Http\Requests\Distributor\AddProductRequest;
use App\Models\Customer\Cart;
use App\Models\Distributor\Brand;
use App\Models\Distributor\Product;
use App\Models\Distributor\ProductType;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProductsController extends Controller
{
    public function store(AddProductRequest $request)
    {
        $distributor = auth()->user()->distributor;
        if (is_null($distributor)) {
            return redirect()->back()->withErrors('cannot find distributor user', 'error');
        }
        //get the inventory of the distributor
        $inventory = $distributor->inventory;

        //gets the brand of the user base on its name in the request
        $productBrand = $distributor->brands()->where('brand_name', $request->brandName)->first();
        $productType = ProductType::where('product_type', $request->productType)->first();
        if (is_null($productBrand) || is_null($productType) || !$this->productTypeIsVerified($productBrand, $productType)) {
            return redirect()->back()->withErrors('error creating the product in the server', 'error');
        }
        try {
            $path = Storage::putFile('', $request->file('image'));
            $product = $inventory->products()->create([
                'product_name' => $request->productName,
                'is_available' => true,
                'description' => $request->productDescription,
                'variant' => $request->variant,
                'brand_id' => $productBrand->brand_id,
                'type_id' => $productType->id,
                'photo_path' => $path,
                'quantity' => rand(2, 500),
                'price' => $request->price,
                ]);
        } catch (\Throwable $th) {
            return redirect()->back()->withErrors('error creating the model in the server', 'error');
        }
        return redirect()->back();
    }
    public function show(Product $product, Request $request)
    {
        //transform to single model with variants array attribute
        $product = Product::where('product_name', $product->product_name)
                        ->with('productType')
                        ->get()
                        ->mapToGroups(function ($product) {
                            return [$product->product_name => $product];
                        })->map(function ($product) {
                            $baseProduct = $product->first();
                            $variants = $product->pluck('variant')->toArray();
                            $prices = $product->pluck('price')->toArray();
                            $quantities = $product->pluck('quantity')->toArray();
                            $baseProduct->variant = $variants;
                            $baseProduct->prices = $prices;
                            $baseProduct->quantity = $quantities;
                            $baseProduct->photo_path = base64_encode(Storage::get($baseProduct->photo_path));
                            return $baseProduct;
                        })->values()->first();
        //also get related products.
        $mergedProducts = $product->productType
                            ->products()
                            ->with(['brand','productType.brandCategory.merchantStoreClass' ])
                            ->get()
                            ->merge($product->brand->products()
                            ->with(['brand','productType.brandCategory.merchantStoreClass' ])
                            ->get())->unique();

        //transforms photo
        $mergedProducts = $mergedProducts->map(function ($product) {
            // dd($product->photo_path);
            // $imagePath = explode('/', $product->photo_path)[7] ?? 'default.jpg';
            $product->photo_path = base64_encode(Storage::get($product->photo_path));
            return $product;
        });
        $paginationData = $this->createPagination($mergedProducts);
        return Inertia::render(
            'Components/Core/CustomerCart',
            ['productData' => $product,
            'paginationData' => $paginationData
            ]
        );
    }
    public function addCart(AddToCartRequest $request)
    {
        if (!Cache::has("{$request->user()->id}cart")) {
            try {
                $cart = $this->storeCart($request);
                $cartCollection = collect([$cart]);
                Cache::put("{$request->user()->id}cart", $cartCollection, now()->addHours(10));
            } catch (\Throwable $th) {
                return redirect()->back()->withErrors($th->getMessage(), 'error');
            }
            return redirect()->back();
        }
        $cartCollection = Cache::get("{$request->user()->id}cart");
        try {
            $cart = $this->storeCart($request);
            $cartCollection->push($cart);
            Cache::put("{$request->user()->id}cart", $cartCollection, now()->addHours(10));
        } catch (\Throwable $th) {
            return redirect()->back()->withErrors('error', 'error');
        }
        return redirect()->back();
    }
    public function destroy(int $productId, Request $request)
    {
        try {
            Product::destroy($productId);
        } catch (\Throwable $th) {
            return redirect()->back()->withErrors('error deleting the product', 'error');
        }
        return redirect()->back();
    }
    //verifies if the product type exist on the brand given
    private function createPagination($mergedProducts)
    {
        $perPage = 12;
        $currentPage = request("page") ?? 1;
        $currentPage = max(0, $currentPage - 1);
        $slicedProducts = $mergedProducts->slice($currentPage * $perPage, $perPage)->values();
        $productsPagination = new LengthAwarePaginator(
            $slicedProducts,
            $mergedProducts->count(),
            $perPage,
            $currentPage + 1,
            [
                'path' => request()->url(),
                'query' => request()->query()
            ]
        );
        return $productsPagination;
    }
    private function productTypeIsVerified(Brand $productBrand, ProductType $productType): bool
    {
        $verified = $productType->brandCategory()
                ->whereHas('brands', function (Builder $query) use ($productBrand) {
                    $query->where('brand_name', $productBrand->brand_name);
                })->get();
        if ($verified->count() <= 0 || $verified->count() >= 2) {
            return false;
        }
        return true;
    }
    private function storeCart(AddToCartRequest $request): Cart
    {
        $product = Product::find($request->productId);
        $imagePath = explode('/', $product->photo_path)[7] ?? 'default.png';
        $price = floatval($request->productPrice);
        $totalPrice = $price * $request->productQuantity;
        $cart = Cart::create([
            'customer_id' => $request->user()->id,
            'product_id' => $request->productId,
            'quantity' => $request->productQuantity,
            'product_variant' => $request->productVariant,
            'status' => 'pending',
            'product_name' => $product->product_name,
            'product_photo' => $product->photo_path,
            'total_price' => $totalPrice,
            'product_price' => $price,
            ]);
        $cart->product_photo = base64_encode(Storage::get($imagePath));

        return $cart;

    }
}

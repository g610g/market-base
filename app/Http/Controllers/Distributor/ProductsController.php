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
            $path = Storage::putFile('productImages', $request->file('image'));
            $product = $inventory->products()->create([
                'product_name' => $request->productName,
                'is_available' => true,
                'description' => $request->productDescription,
                'variant' => $request->variant,
                'brand_id' => $productBrand->brand_id,
                'type_id' => $productType->id,
                'photo_path' => $path,
                //add quantity here
                'quantity' => rand(2, 500),
                'price' => $request->price,
                ]);
        } catch (\Throwable $th) {
            dd($th->getMessage());
            // return redirect()->back()->withErrors('error creating the model in the server', 'error');
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
                            return $baseProduct;
                        })->values()->first();
        //also get related products.
        return Inertia::render('Components/Core/CustomerCart', ['productData' => $product]);
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
        }
        $cartCollection = Cache::get("{$request->user()->id}cart");
        try {
            $cart = $$this->storeCart($request);
            $cartCollection->push($cart);
            Cache::put("{$request->user()->id}cart", $cartCollection, now()->addHours(10));
        } catch (\Throwable $th) {
            return redirect()->back()->withErrors($th->getMessage(), 'error');
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
    private function productTypeIsVerified(Brand $productBrand, ProductType $productType): bool
    {
        $verified = $productType->brandCategory()
                ->whereHas('brands', function (Builder $query) use ($productBrand) {
                    $query->where('brand_name', $productBrand->brand_name);
                })->get();
        // foreach ($verified as $value) {
        //     dump($value->category_name);
        // }
        if ($verified->count() <= 0 || $verified->count() >= 2) {
            return false;
        }
        return true;
    }
    private function storeCart(AddToCartRequest $request): Cart
    {
        $product = Product::find($request->productId);
        $imagePath = explode('/', $product->photo_path)[7];
        $price = floatval($request->productPrice);
        $cart = Cart::create([
            'customer_id' => $request->user()->id,
            'product_id' => $request->productId,
            'quantity' => $request->productQuantity,
            'product_variant' => $request->productVariant,
            'status' => 'pending',
            'product_photo' => Storage::get($imagePath),
            'product_price' => $price,
        ]);
        return $cart;
    }
}

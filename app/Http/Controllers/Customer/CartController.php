<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use App\Http\Requests\Customer\AddToCartRequest;
use App\Http\Requests\Customer\DestroyBulkCartRequest;
use App\Models\Customer\Cart;
use App\Models\Distributor\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class CartController extends Controller
{
    public function show(Request $request)
    {
        $carts = Cache::get("{$request->user()->id}cart", null);
        return Inertia::render('Components/Core/MyCart', ['cartData' => $carts]);
    }
    public function create(AddToCartRequest $request)
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
    public function destroyBulk(DestroyBulkCartRequest $request)
    {
        $cartsData = Cart::whereIn('id', $request->items)->get();
        if (is_null($cartsData) || $cartsData->count() <= 0) {
            return redirect()->back()->withErrors('cannot find items in the server', 'error');
        }
        try {
            $cartsData->each(function ($cart) {
                $cart->delete();
            });
            $cartCacheCollection = Cache::get("{$request->user()->id}cart", null);
            $updatedCartCollection = $cartCacheCollection->filter(function ($cartCache) use ($request) {
                return !in_array($cartCache->id, $request->items);
            })->values();
            Cache::put("{$request->user()->id}cart", $updatedCartCollection, now()->addHours(10));
        } catch (\Throwable $th) {
            return redirect()->back()->withErrors('server error', 'error');
        }
        return redirect()->route('customer.cart');
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

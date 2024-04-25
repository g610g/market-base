<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use App\Models\Distributor\Product;
use Illuminate\Pagination\LengthAwarePaginator;
use Inertia\Inertia;

class ShopController extends Controller
{
    public function show()
    {
        $products = Product::with(['productType.brandCategory.merchantStoreClass', 'brand'])
                            ->get()
                            ->reject(function ($product) {
                                return !$product->is_available;
                            });

        $productsAppended = [];
        //gets as a single record for products that has same name but different variants and price
        $products->each(function ($product) use (&$productsAppended) {
            if (array_key_exists($product->product_name, $productsAppended)) {
                $productsAppended[$product->product_name]['variants'][] = $product->variant;
                $productsAppended[$product->product_name]['price'][] = $product->price;
                return;
            }
            $productsAppended[$product->product_name] = [
                'description' => $product->description,
                'id' => $product->product_id,
                'product_name' => $product->product_name,
                //change the photo to return the actual photo not the path of the photo
                'photo' => null,
                'price' => [$product->price],
                'variants' => [$product->variant],
                'type' => $product->productType->product_type,
                'brand' => $product->brand->brand_name,
                'storeType' => $product->productType->brandCategory->merchantStoreClass->class_name,
            ];
        });
        $products = collect(array_values($productsAppended));
        $perPage = 12;
        $currentPage = request("page") ?? 1;
        $currentPage = max(0, $currentPage - 1);
        $slicedProducts = $products->slice($currentPage * $perPage, $perPage)->values();
        $productsPagination = new LengthAwarePaginator(
            $slicedProducts,
            $products->count(),
            $perPage,
            $currentPage + 1,
            [
                'path' => request()->url(),
                'query' => request()->query()
            ]
        );
        return Inertia::render('Components/Core/Shop', ['products' =>  $productsPagination]);
    }
}

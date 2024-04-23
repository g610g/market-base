<?php

namespace App\Http\Controllers\Distributor;

use App\Http\Controllers\Controller;
use App\Http\Requests\Distributor\AddProductRequest;
use App\Models\Distributor\Brand;
use App\Models\Distributor\Product;
use App\Models\Distributor\ProductType;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

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
        if (is_null($inventory)) {
            $inventory = $distributor->inventory()->create([
                'products_quantity' => 0
            ]);
        }
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
                'price' => $request->price,
                ]);
        } catch (\Throwable $th) {
            dd($th->getMessage());
            // return redirect()->back()->withErrors('error creating the model in the server', 'error');
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
}
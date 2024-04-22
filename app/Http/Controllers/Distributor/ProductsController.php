<?php

namespace App\Http\Controllers\Distributor;

use App\Http\Controllers\Controller;
use App\Http\Requests\Distributor\AddProductRequest;
use App\Models\Distributor\Brand;
use App\Models\Distributor\ProductType;
use Illuminate\Database\Eloquent\Builder;
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
            // return redirect()->back()->withErrors('error creating the product in the server', 'error');
            dd($th->getMessage());
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
        if ($verified->count() <= 0 || $verified->count() >= 2) {
            return false;
        }
        return true;
    }
}

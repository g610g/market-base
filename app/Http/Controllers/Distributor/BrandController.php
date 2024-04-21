<?php

namespace App\Http\Controllers\Distributor;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateBrandRequest;
use App\Models\Admin\BrandCategory;
use App\Models\Admin\MerchantStore;

class BrandController extends Controller
{
    public function create(CreateBrandRequest $request)
    {
        //refactor
        $distributor = auth()->user()->distributor;
        $merchantStore = MerchantStore::where('store_name', $request->merchantStore)->first();
        $brandCategory = BrandCategory::where('category_name', $request->brandCategory)->first();
        if (is_null($merchantStore) || is_null($brandCategory)) {
            return redirect()->back()->withErrors('Cannot find merchant store', 'error');
        }
        $distributor->brands()->create([
                'brand_name' => $request->brandName,
                'store_id' => $merchantStore->store_id,
                'category_id' => $brandCategory->brand_cat_id
            ]);
        return redirect()->back();

    }
}

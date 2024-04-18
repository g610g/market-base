<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\CreateMerchantStoreRequest;
use App\Models\Admin\MerchantClass;
use App\Models\Admin\MerchantStore;
use App\Models\Admin\MerchantStoreClass;

class MerchantStoreController extends Controller
{
    public function create(CreateMerchantStoreRequest $request)
    {
        //checks first if the record exist
        //find a way to prompt the error on error deletion in the interface
        $merchantClass = MerchantStoreClass::where('class_name', $request->merchantStoreClass)->first();
        if (is_null($merchantClass)) {
            return redirect()->back()->withErrors(['The merchant class does not exist in the record'], 'merchant_error');
        }
        //create merchant store from the request
        $merchantClass->merchantStore()->create([
             'store_name' => $request->merchantStore,
             'admin_id' => $request->user()->id,
             'is_open' => true
         ]);
        return redirect()->back();
    }
    public function destroy(MerchantStore $merchantStore)
    {
        //find a way to prompt the error on error deletion in the interface
        if (!$merchantStore->delete()) {
            return redirect()->back()->withErrors(['merchant store deleted unsuccessfully'], 'merchant_error');
        }
        return redirect()->back();
    }
}

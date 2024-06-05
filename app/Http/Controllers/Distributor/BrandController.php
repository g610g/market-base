<?php

namespace App\Http\Controllers\Distributor;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateBrandRequest;
use App\Models\Admin\BrandCategory;
use App\Models\Admin\MerchantStore;
use App\Models\Distributor\Distributor;
use HttpException;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Symfony\Component\HttpFoundation\RedirectResponse;

class BrandController extends Controller
{
    public function show(Request $request): Response
    {
        $userDistributor = $this->extractDistributor($request);
        if (is_null($userDistributor)) {
            throw new HttpException("Cannot Find User", 404);
        }
        $brands = $userDistributor->brands()->with(['merchantStore', 'products'])->get();
        //we get all the merchant stores
        $merchantStores = MerchantStore::with('merchantStoreClass.brandCategories')->get();
        if (is_null($brands) || $brands->count() <= 0) {
            return Inertia::render('Components/Core/DistributorBrands', ['tableData' => [], 'merchantStores' => $merchantStores]);
        }
        $tableData = $brands->map(function ($brand) {
            return [
                'brandId' => $brand->brand_id,
                'brandName' => $brand->brand_name,
                'totalProducts' => $brand->products->count(),
                'merchantStore' => $brand->merchantStore->store_name
            ];
        });
        return Inertia::render('Components/Core/DistributorBrands', ['tableData' => $tableData, 'merchantStores' => $merchantStores]);
    }
    public function create(CreateBrandRequest $request)
    {
        //refactor
        $distributor = $this->extractDistributor($request);
        $merchantStore = MerchantStore::where('store_name', $request->merchantStore)->first();
        $brandCategory = BrandCategory::where('category_name', $request->brandCategory)->first();
        if (is_null($merchantStore) || is_null($brandCategory)) {
            return redirect()->back()->withErrors('Cannot find merchant store', 'error');
        }
        try {
            $distributor->brands()->create([
                'brand_name' => $request->brandName,
                'store_id' => $merchantStore->store_id,
                'category_id' => $brandCategory->brand_cat_id
            ]);

        } catch (\Throwable $th) {
            return redirect()->back()->withErrors('Error During Creating The Brand', 'error');
        }
        return redirect()->back();

    }
    /**
    * The brand id to be deleted.
    * @param int $brandId
    */
    public function destroy($brandId, Request $request): RedirectResponse
    {
        $distributor = $this->extractDistributor($request);
        //error handling
        try {
            //deletes the specific brand in the database
            $distributor->brands()->where('brand_id', $brandId)->delete();
        } catch (\Throwable $th) {
            return redirect()->back()->withErrors([$th->getMessage()], 'error');
        }
        return redirect()->back();
    }
    //helper function to extract the distributor model
    private function extractDistributor(Request $request): Distributor
    {
        $distributor = $request->user()->distributor;
        if (is_null($distributor)) {
            throw new HttpException("Cannot find distributor", 404);
        }
        return $distributor;
    }
}

<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\MerchantStore;
use App\Models\Admin\MerchantStoreClass;
use App\Models\Distributor\Distributor;
use App\Models\Distributor\Product;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Collection;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function show()
    {
        return Inertia::render('Components/Core/Admin');
    }
    public function showMerchantsStores()
    {
        //refactor this
        $merchantData = MerchantStore::with(['brands.distributor'])->get();
        $merchantClasses = MerchantStoreClass::doesntHave('merchantStore')->get();
        $merchantData = $merchantData->map(function ($merchantStore) {
            $brandsCount = $merchantStore->brands->count();
            //if the brands of the store is zero meaning that it does not have products and also zero distributors
            if ($brandsCount === 0) {
                $distributorCount = 0;
                return [
                'storeId' => $merchantStore->store_id,
                'distributorsCount' => $distributorCount,
                'storeName' => $merchantStore->store_name,
                'brandsCount' => $brandsCount,
                'status' => $merchantStore->is_open,
                'productsCount' => 0,
                ];
            }
            //get products with merchantStore as the current store in the iteration
            $productsCount = Product::whereRelation('brand.merchantStore', 'store_id', $merchantStore->store_id)
                                    ->get()
                                    ->count();
            $distributorCount = $merchantStore->brands->mapToGroups(function ($brand) {
                return [$brand->brand_name => $brand->distributor];
            })->unique()->count();
            return [
                'storeId' => $merchantStore->store_id,
                'distributorsCount' => $distributorCount,
                'brandsCount' => $brandsCount,
                'status' => $merchantStore->is_open,
                'storeName' => $merchantStore->store_name,
                'productsCount' => $productsCount,
            ];
        });
        $merchantDataPaginated = $this->paginate(8, $merchantData);
        return Inertia::render('Components/Core/AdminStore', [
             'merchantData' => $merchantDataPaginated,
             'merchantClasses' => $merchantClasses
         ]);
    }
    private function paginate(int $perPage, Collection $data): LengthAwarePaginator
    {
        $currentPage = request("page") ?? 1;
        $currentPage = max(0, $currentPage - 1);
        $slicedData = $data->slice($currentPage * $perPage, $perPage)->values();
        $pagination = new LengthAwarePaginator(
            $slicedData,
            $data->count(),
            $perPage,
            $currentPage + 1,
            [
                'path' => request()->url(),
                'query' => request()->query()
            ]
        );

        return $pagination;
    }
    public function showDistributors()
    {
        $distributors = Distributor::with(['brands.merchantStore', 'user'])
                            ->get()
                            ->map(function ($distributor) {
                                return [
                                    'distributorData' => $distributor,
                                    'brandsCount' => $distributor->brands->count(),
                                    'merchantStoreCount' => $distributor->brands->map(function ($brand) {
                                        return $brand->merchantStore;
                                    })->unique()->count()
                                  ];
                            });
        $perPage = 8;
        $currentPage = request("page") ?? 1;
        $currentPage = max(0, $currentPage - 1);
        $slicedDistributors = $distributors->slice($currentPage * $perPage, $perPage)->values();
        $pagination = new LengthAwarePaginator(
            $slicedDistributors,
            $distributors->count(),
            $perPage,
            $currentPage + 1,
            [
                'path' => request()->url(),
                'query' => request()->query()
            ]
        );

        return Inertia::render('Components/Core/AdminDistributor', [
            'distributors' => $pagination
        ]);
    }
}

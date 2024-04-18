<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\MerchantStore;
use App\Models\Admin\MerchantStoreClass;
use App\Models\Distributor\Distributor;
use Illuminate\Pagination\LengthAwarePaginator;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function show()
    {
        //create a roles middleware
        return Inertia::render('Components/Core/Admin');
    }
    public function showMerchantsStores()
    {
        $merchantData = MerchantStore::with('merchantStoreClass')->paginate(10);
        $merchantClasses = MerchantStoreClass::all();
        return Inertia::render('Components/Core/AdminStore', [
             'merchantData' => $merchantData,
             'merchantClasses' => $merchantClasses
         ]);
    }
    public function showDistributors()
    {
        //get the distributors data and return it to our frontend
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
        $pagination = new LengthAwarePaginator(
            $distributors->slice($currentPage * $perPage, $perPage),
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

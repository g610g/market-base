<?php

namespace App\Http\Controllers\Distributor;

use App\Http\Controllers\Controller;
use App\Models\Admin\MerchantStore;
use App\Models\Distributor\Brand;
use App\Models\Distributor\Distributor;
use HttpException;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DistributorController extends Controller
{
    private Distributor $distributor;
    // public function __construct()
    // {
    //     $this->$distributor = auth()->user()->distributor;
    // }
    public function showLanding()
    {
        return Inertia::render('Components/Core/Distributor');
    }
    public function showBrands()
    {
        $userDistributor = auth()->user()->distributor;
        if (is_null($userDistributor)) {
            throw new HttpException("Cannot Find User", 404);
        }
        $data = $userDistributor->brands()->with(['merchantStore', 'products'])->get()->map(function ($brand) {
            return [
                'brandData' => $brand,
                'productsCount' => $brand->products->count(),
            ];
        });
        $merchantStores = MerchantStore::with('merchantStoreClass.brandCategories')->get();
        return Inertia::render('Components/Core/DistributorBrands', ['data' => $data, 'merchantStores' => $merchantStores]);
    }
    public function showInventory()
    {
        $userDistributor = auth()->user()->distributor;
        if (is_null($userDistributor)) {
            throw new HttpException("Cannot Find User", 404);
        }
        $inventory = $userDistributor->inventory()->with('products.brand')->first();
        return Inertia::render('Components/Core/DistributorInventory', ['inventory' => $inventory]);
    }
    public function showProfile()
    {
        return Inertia::render('Components/Core/DistributorProfile');
    }
}

<?php

namespace App\Http\Controllers\Distributor;

use App\Http\Controllers\Controller;
use App\Models\Admin\MerchantStore;
use App\Models\Distributor\Brand;
use HttpException;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DistributorController extends Controller
{
    public function showLanding()
    {
        return Inertia::render('Components/Core/Distributor');
    }
    public function showBrands()
    {
        $userDistributor = auth()->user()->distributor;
        if (is_null($userDistributor)) {
            return throw new HttpException("Cannot Find User", 404);
        }
        $data = $userDistributor->brands()->with(['merchantStore', 'products'])->get();
        $merchantStores = MerchantStore::with('merchantStoreClass.brandCategories')->get();
        return Inertia::render('Components/Core/DistributorBrands', ['data' => $data, 'merchantStores' => $merchantStores]);
    }
    public function showInventory()
    {
        return Inertia::render('Components/Core/DistributorInventory');
    }
    public function showProfile()
    {
        return Inertia::render('Components/Core/DistributorProfile');
    }
}

<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\MerchantClass;
use App\Models\Admin\MerchantStore;
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
        $merchantData = MerchantStore::with('merchantClass')->paginate(10);
        $merchantClasses = MerchantClass::all();
        return Inertia::render('Components/Core/AdminStore', [
             'merchantData' => $merchantData,
             'merchantClasses' => $merchantClasses
         ]);

    }
    public function showDistributors()
    {
        return Inertia::render('Components/Core/AdminDistributor');
    }
}

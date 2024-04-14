<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\MerchantStore;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function show()
    {
        //create a roles middleware
        $merchantStores = MerchantStore::with('merchantClass')->paginate(5);
        return Inertia::render('Components/Core/Admin', [
            'merchant_store_data' => $merchantStores
        ]);
    }
}

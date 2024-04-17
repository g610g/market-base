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
        return Inertia::render('Components/Core/Admin');
    }
    public function showMerchants()
    {
        $merchantData = MerchantStore::with('merchantClass')->paginate(10);
        // dd($merchantData);
        //we will try to split type shit
        // if (len($merchantData->links) > 5) {
        //
        // }
        return Inertia::render('Components/Core/AdminStore', [
            'merchantData' => $merchantData
        ]);

    }
}

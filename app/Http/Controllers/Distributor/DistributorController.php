<?php

namespace App\Http\Controllers\Distributor;

use App\Http\Controllers\Controller;
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
        return Inertia::render('Components/Core/DistributorBrands');
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

<?php

namespace App\Http\Controllers\Distributor;

use App\Http\Controllers\Controller;
use HttpException;
use Inertia\Inertia;

class DistributorController extends Controller
{
    public function showLanding()
    {
        return Inertia::render('Components/Core/Distributor');
    }
    public function showInventory()
    {
        $userDistributor = auth()->user()->distributor;
        if (is_null($userDistributor)) {
            throw new HttpException("Cannot Find User", 404);
        }
        $inventory = $userDistributor->inventory()->with('products.brand')->first();
        $brands = $userDistributor->brands()->with('brandCategory.productTypes')->get();
        //if null inventory pasabot wala pa shay products pero naa na shay brands
        if (is_null($inventory) && is_null($brands)) {
            return Inertia::render('Components/Core/DistributorInventory', [
                'tableData' => [],
                'brands' => []
            ]);
        } elseif (is_null($inventory)) {
            return Inertia::render('Components/Core/DistributorInventory', [
                'tableData' => [],
                'brands' => $brands
            ]);
        }

        //transform the data for the table
        $tableData = $inventory->products->map(function ($product) {
            return [
                'productId' => $product->product_id,
                'productName' => $product->product_name,
                'brandName' => $product->brand->brand_name,
                'variant' => $product->variant,
                'quantity' => 20,
                'price' => $product->price
            ];
        });
        if (is_null($brands)) {
            return Inertia::render('Components/Core/DistributorInventory', ['tableData' => $tableData, 'brands' => []]);
        }
        return Inertia::render('Components/Core/DistributorInventory', ['tableData' => $tableData, 'brands' => $brands]);
    }
    public function showProfile()
    {
        return Inertia::render('Components/Core/DistributorProfile');
    }
}

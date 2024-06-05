<?php

namespace App\Http\Controllers\Distributor;

use App\Http\Controllers\Controller;
use HttpException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rules\File;
use Inertia\Inertia;
use Throwable;

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
    //retrieve user data and its distributor data
    public function showProfile()
    {
        try {
            $user = auth()->user();
            $distributor = $user->distributor;
            // $distributor->profile_picture = base64_encode(Storage::get($distributor->profile_picture));
            dd(Storage::url($distributor->profile_picture));
            $distributor->profile_picture = Storage::url($distributor->profile_picture);
            // dd();
            return Inertia::render('Components/Core/DistributorProfile', [
                'user' => $user,
                'distributor' => $distributor,
            ]);
        } catch (\Throwable $th) {
            dd($th->getMessage());
        }

    }
    //update distributor's profile
    public function updateProfile(Request $request)
    {
        try {
            $user = $request->user();
            if (is_null($user)) {
                throw new HttpException("No user found", 404);
            }
            $validated = $request->validate([
                'firstName' => 'required|min:1|string',
                'lastName' => 'required|min:1|string',
                'profile' =>  [File::image()->max(10 * 1024), 'required'],
                'phoneNumber' => ['required', 'regex:/^(09|\+639)\d{9}$/'],
                    ]);
            $distributor = $user->distributor;
            $user->first_name = $validated['firstName'];
            $user->last_name = $validated['lastName'];
            $user->phone_number = $validated['phoneNumber'];
            $pathName =  Storage::putFile('', $request->file('profile'));
            $distributor->profile_picture = $pathName;
            $user->save();
            $distributor->save();

        } catch (Throwable $e) {
            dd($e->getMessage());
        }
        return redirect()->back();
    }
}

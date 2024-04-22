<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\AuthController;
use App\Http\Controllers\Admin\MerchantStoreController;
use App\Http\Controllers\Customer\CustomerController;
use App\Http\Controllers\Distributor\BrandController;
use App\Http\Controllers\Distributor\DistributorController;
use App\Http\Controllers\Distributor\ProductsController;
use App\Http\Controllers\Guest\AuthController as AppAuthController;
use App\Http\Controllers\MainAuthController;
use App\Models\Distributor\Distributor;
use App\Models\Distributor\ProductType;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\URL;
use Inertia\Inertia;

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Components/Core/Authorize', [
            'data' => auth()->user()
        ]);
    })->name('home.dashboard');
    Route::group(['prefix' => 'customer', 'middleware' => 'role:customer'], function () {
        Route::get('/', [CustomerController::class, 'show'])->name('home.dashboard.customer');
        Route::get('/shop', function () {
            return Inertia::render('Components/Core/Shop');
        });
        Route::patch('/update', [CustomerController::class, 'update']);
    });

    Route::group(['prefix' => 'admin', 'middleware' => 'role:admin'], function () {
        Route::get(
            '/',
            [AdminController::class, 'show']
        )->name('home.dashboard.admin');
        Route::get('/store', [AdminController::class, 'showMerchantsStores']);
        Route::post('/store', [MerchantStoreController::class, 'create']);
        Route::delete('/store/{merchantStore}', [MerchantStoreController::class, 'destroy']);
        Route::get('distributor', [AdminController::class, 'showDistributors']);
    });
    Route::group(['prefix' => 'distributor', 'middleware' => 'role:distributor'], function () {
        Route::get('/', [DistributorController::class, 'showLanding'])->name('home.dashboard.distributor');
        Route::get('/brands', [DistributorController::class, 'showBrands']);
        Route::post('/brands', [BrandController::class, 'create']);
        Route::get('/inventory', [DistributorController::class, 'showInventory']);
        Route::post('/inventory', [ProductsController::class, 'store']);
        Route::get('/profile', [DistributorController::class, 'showProfile']);
    });
    Route::post('/logout', function (Request $request) {
        Auth::guard('web')->logout();
        $request->session()->invalidate();
        return redirect()->route('home.login');
    });
});
Route::middleware('guest:sanctum')->group(function () {
    Route::get('/', [MainAuthController::class, 'show'])->name('home.login');
    Route::post('/login', [MainAuthController::class, 'login'])->name('login');
    Route::get('/register', [MainAuthController::class, 'showRegister'])->name('users.create');
    Route::post('/register', [MainAuthController::class, 'register']);
});
Route::group(['prefix' => 'guest'], function () {
    Route::get('/login', [AppAuthController::class, 'loginView']);
    Route::post('/login', [AppAuthController::class, 'login']);
});
Route::group(['prefix' => 'distributor'], function () {
    Route::get('/login', function () {
    });
});
Route::group(['prefix' => 'admin'], function () {
    Route::post('/login', [AuthController::class, 'login']);
});

Route::get('/routes', function () {
    $users = User::factory()->count(5);
    return Inertia::render('Components/Routes', [
        'users' => User::all()->map(function ($user) {
            return [
                'id' => $user->id,
                'first_name' => $user->first_name,
                'last_name' => $user->last_name,
                'email' => $user->email,
                'phone_number' => $user->phone_number,
                'role_id' => $user->role_id,
                'city' => $user->city,
                'province' => $user->province,
                'country' =>  $user->country,
                'barangay' => $user->barangay,
                'edit_url' => URL::route('home', ['user' => 'Gio'])
            ];
        }),
        'create_url' => URL::route('users.create'),
    ]);
});
Route::get('/testing', function () {
    $distributor = Distributor::inRandomOrder()->with('user')->first();
    $inventoryWithProducts = $distributor->inventory()->with('products')->get();
    return ProductType::all();
    // return ['distributor' => $distributor, 'inventory' => $inventoryWithProducts];
});

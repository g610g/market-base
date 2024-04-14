<?php

use App\Http\Controllers\Admin\AuthController;
use App\Http\Controllers\Guest\AuthController as AppAuthController;
use App\Http\Controllers\MainAuthController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\URL;
use Inertia\Inertia;

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Components/Core/Authorize', [
            'data' => auth()->user()
        ]);
    })->name('home.dashboard');
});
Route::group(['prefix' => 'guest'], function () {
    Route::get('/login', [AppAuthController::class, 'loginView']);
    Route::post('/login', [AppAuthController::class, 'login']);
});
Route::group(['prefix' => 'distributor'], function () {
    Route::get('/login', function () {});
});
Route::group(['prefix' => 'admin'], function () {
    Route::post('/login', [AuthController::class, 'login']);

});

// This will be the landing page
Route::middleware('guest:sanctum')->group(function () {
    Route::get('/', function (Request $request) {
        return Inertia::render('Components/Core/Landing', ['user' => $request->query('user') ]);
    })->name('home');
    Route::post('/login', [MainAuthController::class, 'login'])->name('login');
});
Route::get('/register', function () {
    return Inertia::render('Components/Core/Register');
})->name('users.create');
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

<?php

use App\Http\Controllers\Admin\AuthController;
use App\Http\Controllers\Guest\AuthController as AppAuthController;
use App\Models\Admin\Admin;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/authorize', function () {
        return Inertia::render('Authorize', [
            'data' => auth()->user()
        ]);
    })->name('auth');
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
Route::get('/', function () {
    $error = session()->all();
    try {
        $user = Admin::with('user')->first();
    } catch(Exception $e) {
        return Inertia::render('Test', [
            'data' => [
                'error' => $e->getMessage()
            ]
        ]);
    }
    return Inertia::render('Test', [
        'data' => $user,
        'error' => $error
    ]);
})->name('home');
Route::get('/test', function () {
    return Inertia::render('Testing');
});
Route::post('/test', function () {
    return Inertia::render('Testing', [
        'data' => 'test'
    ]);
});

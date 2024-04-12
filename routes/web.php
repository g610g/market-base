<?php

use App\Http\Controllers\Admin\AuthController;
use App\Models\Admin\Admin;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware('auth:sanctum')->group(function(){
    Route::get('/authorize', function(){
        return Inertia::render('Authorize',[
            'data' => auth()->user()
        ]);
    })->name('auth');
});
Route::get('/', function () {
    try{
        $user = Admin::with('user')->first();
    }catch(Exception $e){
        return Inertia::render('Test',[
            'data' => [
                'error' => $e->getMessage()
            ]
        ]);
    }
    return Inertia::render('Test', [
        'data' => $user
    ]);
});
Route::post('admin/login', [AuthController::class, 'login']);
Route::get('/test',function (){
    return Inertia::render('Testing');
});
Route::post('/test', function(){
    return Inertia::render('Testing', [
        'data' => 'test'
    ]);
});

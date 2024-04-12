<?php

use App\Models\Customer;
use App\Models\Role;
use App\Models\User;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    // $user = Customer::with('user')->get();
    try{
        $user = User::where('role_id', Role::ADMIN)->with('admin')->first();
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
Route::get('/test',function (){
    return Inertia::render('Testing');
});
Route::post('/test', function(){
    return Inertia::render('Testing', [
        'data' => 'test'
    ]);
});

<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::render('Test');
});
Route::get('/test',function (){
    return Inertia::render('Testing');
});
Route::post('/test', function(){
    return Inertia::render('Testing', [
        'data' => 'test'
    ]);
});

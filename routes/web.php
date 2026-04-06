<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function(){
    return Inertia::render('DashboardPage');
})->name('home');

Route::get('/user/{id}', [UserController::class, 'show'])->name('user.show');

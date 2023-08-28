<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login')->name('login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::get('refresh', 'refresh');
    Route::post('password', 'passwordSet');
    Route::get("users-all/{dataPerPage?}", "allUsers");
    Route::get("user-search", "searchUser");
    Route::post("edit-user", "editUser");
});

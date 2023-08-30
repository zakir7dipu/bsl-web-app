<?php

use App\Http\Controllers\API\SettingsController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\SEOController;
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

Route::controller(SettingsController::class)->group(function (){
    Route::get('all-settings','settings')->name('all.settings');
    Route::get('about-settings','aboutSetting');
    Route::get('slider-settings','sliderSetting');
    Route::get('technology-settings','technologySetting');
    Route::get('align-with-settings','alignWithSetting');
    Route::post('store-settings','storeSettings');
});

Route::controller(SEOController::class)->group(function (){
    Route::get('seo/{page}','getSeo');
    Route::post('store-seo','storeSeo');
});

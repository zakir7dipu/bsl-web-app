<?php

use App\Http\Controllers\API\AboutsController;
use App\Http\Controllers\API\IndustriesController;
use App\Http\Controllers\API\SEOController;
use App\Http\Controllers\API\SettingsController;
use App\Http\Controllers\API\TechnologyController;
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

Route::controller(SettingsController::class)->group(function (){
    Route::get('all-settings','settings')->name('all.settings');
    Route::get('about-settings','aboutSetting');
    Route::post('store-about-settings','storeAboutSettings');
    Route::get('slider-settings','sliderSetting');
    Route::post('store-settings', 'storeSettings');
    Route::get('technology-settings','technologySetting');
    Route::get('industry-settings', 'industrySettings');
});

Route::controller(SEOController::class)->group(function () {
    Route::get('seo/{page}', 'getSeo');
    Route::post('store-seo', 'storeSeo');
});

Route::controller(TechnologyController::class)->group(function () {
    Route::get('technology/{items?}', 'index');
    Route::post("technology-store", "store");
    Route::get("technology/{slug}/show", "show");
    Route::post("technology/{slug}/update", "update");
    Route::delete("technology/{slug}/destroy", "destroy");
});

Route::controller(IndustriesController::class)->group(function () {
    Route::get('industries/{items?}', 'index');
    Route::post("industries-store", "store");
    Route::get("industries/{slug}/show", "show");
    Route::post("industries/{slug}/update", "update");
    Route::delete("industries/{slug}/destroy", "destroy");
});


Route::controller(AboutsController::class)->group(function () {
    Route::get('abouts/', 'index');
    Route::post("abouts-store", "store");
    Route::get("abouts/{slug}/show", "show");
    Route::post("abouts/{slug}/update", "update");
    Route::delete("abouts/{slug}/destroy", "destroy");
});

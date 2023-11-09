<?php

use App\Http\Controllers\API\AboutsController;
use App\Http\Controllers\API\BlogsController;
use App\Http\Controllers\API\CaseStudyController;
use App\Http\Controllers\API\ClientsController;
use App\Http\Controllers\API\CourseController;
use App\Http\Controllers\API\CurricularController;
use App\Http\Controllers\API\IndustriesController;
use App\Http\Controllers\API\ManagementController;
use App\Http\Controllers\API\MessageController;
use App\Http\Controllers\API\PagesController;
use App\Http\Controllers\API\PartnerController;
use App\Http\Controllers\API\ProductController;
use App\Http\Controllers\API\SEOController;
use App\Http\Controllers\API\ServiceController;
use App\Http\Controllers\API\SettingsController;
use App\Http\Controllers\API\SubscriberController;
use App\Http\Controllers\API\TeamsController;
use App\Http\Controllers\API\TechnologyController;
use App\Http\Controllers\API\TestimonialController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ScheduleController;
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
    //Route::post('store-about-settings','storeAboutSettings');
    Route::get('slider-settings','sliderSetting');
    Route::post('store-settings', 'storeSettings');
    Route::get('technology-settings','technologySetting');
    Route::get('industry-settings', 'industrySettings');
    Route::get('service-settings', 'serviceSettings');
    Route::get('case-study-settings', 'caseStudySettings');
    Route::get('blog-settings', 'blogSettings');
    Route::get('testimonial-settings', 'testimonialSettings');
    Route::get('schedule-settings', 'scheduleSettings');
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
    Route::get('abouts', 'index');
    Route::post("abouts-store", "store");
    Route::get("abouts/{slug}/show", "show");
    Route::post("abouts/{slug}/update", "update");
    Route::delete("abouts/{slug}/destroy", "destroy");
});

Route::controller(ManagementController::class)->group(function () {
    Route::get('managements', 'index');
    Route::post("managements-store", "store");
    Route::get("managements/{slug}/show", "show");
    Route::post("managements/{slug}/update", "update");
    Route::delete("managements/{slug}/destroy", "destroy");
});

Route::controller(TeamsController::class)->group(function () {
    Route::get('teams', 'index');
    Route::post("teams-store", "store");
    Route::get("teams/{slug}/show", "show");
    Route::post("teams/{slug}/update", "update");
    Route::delete("teams/{slug}/destroy", "destroy");
});

Route::controller(ClientsController::class)->group(function () {
    Route::get('clients', 'index');
    Route::post("clients-store", "store");
    Route::get("clients/{slug}/show", "show");
    Route::post("clients/{slug}/update", "update");
    Route::delete("clients/{slug}/destroy", "destroy");
});

Route::controller(PartnerController::class)->group(function () {
    Route::get('partners', 'index');
    Route::post("partners-store", "store");
    Route::get("partners/{slug}/show", "show");
    Route::post("partners/{slug}/update", "update");
    Route::delete("partners/{slug}/destroy", "destroy");
});

Route::controller(ServiceController::class)->group(function () {
    Route::get('services/{items?}', 'index');
    Route::get("get-parent-services/{item?}", "create");
    Route::post("services-store", "store");
    Route::get("services/{slug}/show", "show");
    Route::get("services/{id}/edit", "edit");
    Route::post("services/{id}/update", "update");
    Route::delete("services/{id}/destroy", "destroy");
});

Route::controller(ProductController::class)->group(function () {
    Route::get('products', 'index');
    Route::post("products-store", "store");
    Route::get("products/{slug}/show", "show");
    Route::post("products/{slug}/update", "update");
    Route::delete("products/{slug}/destroy", "destroy");

    /*For frontend products with pagination*/
    Route::get('products-all/{id}', 'productsAll');
});

Route::controller(CourseController::class)->group(function () {
    Route::get("courses", "index");
    Route::get("get-services", "create");
    Route::post("courses-store", "store");
    Route::get("courses/{slug}/show", "show");
    Route::get("courses/{id}/edit", "edit");
    Route::post("courses/{id}/update", "update");
    Route::delete("courses/{id}/destroy", "destroy");
    //Frontend courses pagination
    Route::get("courses-all/{slug?}/{service?}", "courseAll");
    Route::get("get-courses/{slug}", "getCourse");
});

Route::controller(CurricularController::class)->group(function () {
    Route::get("curricular/{course?}", "index");
    Route::post("curricular", "store");
    Route::get("curricular/{id}/show", "show");
    Route::post("curricular/{id}/update", "update");
    Route::delete("curricular/{id}/destroy", "destroy");
});

Route::controller(BlogsController::class)->group(function () {
    Route::get("blogs/{take?}", "index");
    Route::get("blogs-all", "allData");
    Route::post("blogs-store", "store");
    Route::get("blogs/{slug}/show", "show");
    Route::post("blogs/{id}/update", "update");
    Route::delete("blogs/{id}/destroy", "destroy");

    Route::get("latest-blogs/{current?}", "latestBlogs");

});

Route::controller(CaseStudyController::class)->group(function () {
    Route::get("case-study/{take?}", "index");
    Route::post("case-study-store", "store");
    Route::get("case-study/{slug}/show", "show");
    Route::post("case-study/{id}/update", "update");
    Route::delete("case-study/{id}/destroy", "destroy");
});

Route::controller(TestimonialController::class)->group(function () {
    Route::get("testimonial/{take?}", "index");
    Route::post("testimonial-store", "store");
    Route::get("testimonial/{slug}/show", "show");
    Route::post("testimonial/{id}/update", "update");
    Route::delete("testimonial/{id}/destroy", "destroy");
	Route::post("testimonial-search", "search");
});

Route::controller(PagesController::class)->group(function () {
    Route::get("pages", "index");
    Route::post("pages-store", "store");
    Route::get("pages/{slug}/show", "show");
    Route::post("pages/{id}/update", "update");
    Route::delete("pages/{id}/destroy", "destroy");
    Route::post("pages-search", "search");
});

Route::controller(MessageController::class)->group(function () {
    Route::get("messages", "index");
    Route::post("messages-store", "store");
    Route::get("messages/{slug}/show", "show");
    Route::delete("messages/{id}/destroy", "destroy");
});

Route::controller(ScheduleController::class)->group(function () {
    Route::get("schedules", "index");
    Route::post("schedules-store", "store");
    Route::get("schedules/{slug}/show", "show");
    Route::delete("schedules/{id}/destroy", "destroy");
});

Route::controller(SubscriberController::class)->group(function () {
    Route::get("subscribers", "index");
    Route::post("subscribers-store", "store");
    Route::get("subscribers/{slug}/show", "show");
    Route::delete("subscribers/{id}/destroy", "destroy");
});
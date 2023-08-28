<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SettingsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['settings']]);
    }

    /**
     * Display a listing of the resource.
     */

    public function settings()
    {
        $settings = getAllSettings()->general;
        return response()->json([
            'allSettings' => $settings,
        ]);
    }

    public function aboutSetting()
    {
        $settings = aboutInfo();
        return response()->json([
            'data' => $settings,
        ]);
    }
    public function sliderSetting()
    {
        $settings = sliderInfo();
        return response()->json([
            'data' => $settings,
        ]);
    }
    public function technologySetting()
    {
        $settings = technology();
        return response()->json([
            'data' => $settings,
        ]);
    }
    public function alignWithSetting()
    {
        $settings = alignWith();
        return response()->json([
            'data' => $settings,
        ]);
    }

    /**
     * Display a listing of the resource.
     */

    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}

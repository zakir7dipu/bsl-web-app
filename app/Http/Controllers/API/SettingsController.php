<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\SettingsGenerator;
use App\Models\Technology;
use Illuminate\Http\Request;

class SettingsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['settings', 'sliderSetting']]);
    }

    /**
     * Display a listing of the resource.
     */

    public function settings()
    {
        $settings = getAllSettings();
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
        $settings = Technology::orderBy('order_by', 'asc')->get();
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
     * Store a newly created resource in storage.
     */
    public function storeSettings(Request $request)
    {
        try {
            $generalSetting = new SettingsGenerator();
            $global = "site.settings.";
            $sliderglobal = "site.";
            $data = match ($request->type) {
                "general" => storeGeneralData($generalSetting, $global, $request),
                "contact_info" => storeContactInfoData($global, $request),
                "newsletter" => storeNewsletterData($global, $request),
                "backlink" => storeBacklinkData($global, $request),
                "slider" => storeSliderData($sliderglobal, $request),
                default => "no Data Found",
            };

            return response()->json(setting($global . 'general'));
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), $th->getCode());
        }
    }

}

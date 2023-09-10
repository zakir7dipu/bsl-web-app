<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Industries;
use App\Models\SettingsGenerator;
use App\Models\Technology;
use Illuminate\Http\Request;

class SettingsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['settings', 'sliderSetting', 'aboutSetting', 'technologySetting', 'industrySettings']]);
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
        $technology = technologyInfo();
        return response()->json([
            'data' => $technology,
        ]);
    }

    public function industrySettings()
    {
        $industries = industryInfo();
        return response()->json([
            'data' => $industries,
        ]);
    }

    public function serviceSettings()
    {
        $services = serviceInfo();
        return response()->json([
            'data' => $services,
        ]);
    }

    public function caseStudySettings()
    {
        $caseStudy = caseStudyInfo();
        return response()->json([
            'data' => $caseStudy,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function storeSettings(Request $request)
    {
        try {
            $generalSetting = new SettingsGenerator();
            $global = "site.settings";
            $sliderglobal = "site";
            $data = match ($request->type) {
                "general" => storeGeneralData($generalSetting, $global, $request),
                "contact_info" => storeContactInfoData($global, $request),
                "newsletter" => storeNewsletterData($global, $request),
                "backlink" => storeBacklinkData($global, $request),
                "slider" => storeSliderData($sliderglobal, $request),
                "technology" => storeTechnologyData($sliderglobal, $request),
                "industry" => storeIndustryData($sliderglobal, $request),
                "about" => storeAboutData($generalSetting, $sliderglobal, $request),
                "service" => storeServiceData($sliderglobal, $request),
                "case_study" => storeCaseStudyData($sliderglobal, $request),
                default => "no Data Found",
            };

            return response()->json($data);
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), $th->getCode());
        }
    }

}

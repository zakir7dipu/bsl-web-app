<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\SettingsGenerator;
use Illuminate\Http\Request;

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
    public function storeSettings(Request $request)
    {
        try {
            $generalSetting = new SettingsGenerator();

            $page = "site.settings.general";

            $currentFile = $generalSetting->findSetting($page . '.site_logo');
            $currentIcon = $generalSetting->findSetting($page . '.site_favicon');
            if ($request->hasFile("site_logo")) {
                $filename = time() . '-' . 'logo.' . fileInfo($request->site_logo)['extension'];
                $path = 'uploads/settings';
                if ($currentFile) {
                    fileDelete($currentFile);
                }
                fileUpload($request->site_logo, $path, $filename);
                $site_logo = $path . '/' . $filename;
            }

            if ($request->hasFile("site_favicon")) {
                $filename = time() . '-' . 'icon.' . fileInfo($request->site_favicon)['extension'];
                $path = 'uploads/settings';
                if ($currentIcon) {
                    fileDelete($currentIcon);
                }
                fileUpload($request->site_favicon, $path, $filename);
                $site_favicon = $path . '/' . $filename;
            }

            $data = [
                "site_name" => $request->site_name,
                "slogan" => $request->slogan,
                "site_logo" => $request->hasFile("site_logo") ? $site_logo : $currentFile,
                "site_favicon" => $request->hasFile("site_favicon") ? $site_favicon : $currentIcon,
                "footer_detail" => $request->footer_detail,
            ];

            //$setting = $generalSetting->saveSetting($page, $data);
            setting([$page.'.footer_detail' => $request->footer_detail]);
            setting([$page => $data]);

            return response()->json(setting($page));
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), $th->getCode());
        }
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

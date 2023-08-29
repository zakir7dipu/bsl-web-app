<?php

namespace App\Http\Controllers;

use App\Models\SEOGenerator;
use Illuminate\Http\Request;

class SEOController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['getSeo']]);
    }

    public function getSeo($page) {
        try {
            $seoG = new SEOGenerator();
            $seo = $seoG->findSeo($page);
            return response()->json($seo);
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(),$th->getCode());
        }
    }

    public function storeSeo($page, Request $request) {
        try {
            $seoG = new SEOGenerator();
            $robots = $request->robots;
            $author = $request->author !== ""? "Bizz Solutions":$request->author;
            $keywords = $request->keywords;
            $description = $request->description;
            $type = $request->type;
            $url = $request->url;
            $seo = $seoG->saveSeo($page, $robots, $author, $keywords, $description, $type, $url);
            return response()->json($seo);
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(),$th->getCode());
        }
    }
}

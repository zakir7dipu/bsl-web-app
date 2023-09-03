<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Abouts;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class AboutsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['index']]);
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $about = Abouts::orderBy('id', 'desc')->first();
            return response()->json($about);
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), $th->getCode());
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            "title" => ["required", "string", "max:128"],
            "description" => ["required"],
            'image' => 'max:2024'
        ]);

        DB::beginTransaction();
        try {
            $about = new Abouts();
            $about->title = $request->title;
            $about->description = $request->description;
            $about->btn_text = $request->btn_text;
            $about->btn_url = $request->btn_url;
            $about->slug = Str::slug($request->title);

            if ($request->hasFile('image')) {
                $filename = time() . '-' . 'about.' . fileInfo($request->image)['extension'];
                $path = 'uploads/about';
                fileUpload($request->image, $path, $filename);
                $img = '/' . $path . '/' . $filename;
                $about->image = $img;
            }

            $about->save();
            DB::commit();
            return response()->json($about);
        } catch (\Throwable $th) {
            DB::rollBack();
            return response()->json($th->getMessage(), $th->getCode());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $slug)
    {
        try {
            $about = Abouts::where('slug', $slug)->first();
            return response()->json($about);
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), $th->getCode());
        }
    }

    /**
     * Update the specified resource in storage.
     */

    public function update(Request $request, string $slug)
    {

        $request->validate([
            "title" => ["required", "string", "max:128"],
            "description" => ["required"],
            'image' => 'max:2024'
        ]);

        DB::beginTransaction();
        try {
            $about = Abouts::where('slug', $slug)->first();
            $about->title = $request->title;
            $about->description = $request->description;
            $about->btn_text = $request->btn_text;
            $about->btn_url = $request->btn_url;
            $about->slug = Str::slug($request->title);

            if ($request->hasFile('image')) {
                $filename = time() . '-' . 'about.' . fileInfo($request->image)['extension'];
                $path = 'uploads/about';

                if ($about->image) {
                    fileDelete($about->image);
                }

                fileUpload($request->image, $path, $filename);
                $img = '/' . $path . '/' . $filename;
                $about->image = $img;
            }

            $about->save();
            DB::commit();
            return response()->json($about);
        } catch (\Throwable $th) {
            DB::rollBack();
            return response()->json($th->getMessage(), $th->getCode());
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $slug)
    {
        DB::beginTransaction();
        try {

            $about = Abouts::where('slug', $slug)->first();
            if ($about->image) {
                fileDelete($about->image);
            }
            $about->delete();
            DB::commit();
            return response()->json($about);
        } catch (\Throwable $th) {
            DB::rollBack();
            return response()->json($th->getMessage(), $th->getCode());
        }
    }
}

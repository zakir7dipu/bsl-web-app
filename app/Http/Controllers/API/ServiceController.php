<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Services;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ServiceController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['index', 'show']]);
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {

            $services = Services::with(['service'])->orderBy('id', 'asc')->get();

            return response()->json($services);
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), $th->getCode());
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        try {
            $services = Services::doesntHave('service')->orderBy('id', 'asc')->get();
            return response()->json($services);
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
            "brief" => ["string"],
            "description" => ["required", "string"],
            "type" => ["required", "string"],
            "meta_title" => ["required", "string"],
            "meta_keywords" => ["required", "string"],
            "meta_description" => ["required", "string"],
            'image_link' => ['image', 'mimes:jpeg,png,jpg,gif,svg', 'max:2048'],
        ]);

        DB::beginTransaction();
        try {

            $service = new Services();
            $service->title = $request->title;
            $service->parent_id = $request->parent_id ?? null;
            $service->slug = Str::slug($request->title);
            $service->brief = $request->brief;
            $service->description = $request->description;
            $service->type = $request->type;
            $service->meta_title = $request->meta_title;
            $service->meta_keywords = $request->meta_keywords;
            $service->meta_description = $request->meta_description;

            if ($request->hasFile('image_link')) {
                $filename = time() . '-' . 'service.' . fileInfo($request->image_link)['extension'];
                $path = 'uploads/services';
                fileUpload($request->image_link, $path, $filename);
                $img = '/' . $path . '/' . $filename;
                $service->image_link = $img;
                $service->meta_image_link = $img;
            }

            $service->save();
            DB::commit();
            return response()->json($service);
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

            $service = Services::with('service')->where('slug', $slug)->first();
            return response()->json($service);

        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), $th->getCode());
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        try {

            $service = Services::where('id', $id)->first();
            return response()->json($service);

        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), $th->getCode());
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            "title" => ["required", "string", "max:128"],
            "brief" => ["string"],
            "description" => ["required", "string"],
            "type" => ["required", "string"],
            "meta_title" => ["required", "string"],
            "meta_keywords" => ["required", "string"],
            "meta_description" => ["required", "string"],
            'image_link' => ['image', 'mimes:jpeg,png,jpg,gif,svg', 'max:2048'],
        ]);

        DB::beginTransaction();
        try {

            $service = Services::where('id', $id)->first();
            $service->title = $request->title;
            $service->parent_id = $request->parent_id ?? null;
            $service->slug = Str::slug($request->title);
            $service->brief = $request->brief;
            $service->description = $request->description;
            $service->type = $request->type;
            $service->meta_title = $request->meta_title;
            $service->meta_keywords = $request->meta_keywords;
            $service->meta_description = $request->meta_description;

            if ($request->hasFile('image_link')) {
                $filename = time() . '-' . 'service.' . fileInfo($request->image_link)['extension'];
                $path = 'uploads/services';
                if ($service->image_link) {
                    fileDelete($service->image_link);
                }
                fileUpload($request->image_link, $path, $filename);
                $img = '/' . $path . '/' . $filename;
                $service->image_link = $img;
                $service->meta_image_link = $img;
            }

            $service->save();
            DB::commit();
            return response()->json($service);
        } catch (\Throwable $th) {
            DB::rollBack();
            return response()->json($th->getMessage(), $th->getCode());
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        DB::beginTransaction();
        try {
            $service = Services::where('id', $id)->first();

            $service->subServices->each->delete();
            $service->courses->each->delete();
            $service->products->each->delete();

            $service->delete();
            DB::commit();
            return response()->json($service);
        } catch (\Throwable $th) {
            DB::rollBack();
            return response()->json($th->getMessage(), $th->getCode());
        }
    }
}

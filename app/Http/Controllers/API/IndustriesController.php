<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Industries;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class IndustriesController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['index', 'show', 'edit']]);
    }

    /**
     * Display a listing of the resource.
     */
    public function index($items)
    {
        try {
            if ($items>0){
                $industries = Industries::orderBy('order_by', 'desc')->take($items)->get();
            }else{
                $industries = Industries::orderBy('order_by', 'desc')->get();
            }
            return response()->json($industries);
        } catch (\Throwable $th) {
            return response()->json($th->getMessage());
        }
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
        $request->validate([
            "name" => ["required", "string", "max:128"],
            "order_by" => ["required", "max:10"],
            'image_link' => 'image|max:2024'
        ]);

        DB::beginTransaction();
        try {
            $industries = new Industries();
            $industries->name = $request->name;
            $industries->order_by = $request->order_by;

            if ($request->hasFile('image_link')) {
                $filename = time() . '-' . 'industry.' . fileInfo($request->image_link)['extension'];
                $path = 'uploads/industries';
                fileUpload($request->image_link, $path, $filename);
                $img = '/' . $path . '/' . $filename;
                $industries->image_link = $img;
            }
            $industries->save();
            DB::commit();
            return response()->json($industries);
        } catch (\Throwable $th) {
            DB::rollBack();
            return response()->json($th);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $slug)
    {
        try {
            $industries = Industries::where('slug', $slug)->first();
            return response()->json($industries);
        } catch (\Throwable $th) {
            return response()->json($th);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        try {
            $industries = Industries::where('id', $id)->first();
            return response()->json($industries);
        } catch (\Throwable $th) {
            return response()->json($th);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $slug)
    {
        $request->validate([
            "name" => ["required", "string", "max:128"],
            "order_by" => ["required", "max:10"],
            'image_link' => 'max:2024'
        ]);

        DB::beginTransaction();
        try {
            $industries = Industries::where('slug', $slug)->first();
            $industries->name = $request->name;
            $industries->order_by = $request->order_by;

            if ($request->hasFile('image_link')) {
                $filename = time() . '-' . 'industry.' . fileInfo($request->image_link)['extension'];
                $path = 'uploads/industries';

                if ($industries->image_link) {
                    fileDelete($industries->image_link);
                }
                fileUpload($request->image_link, $path, $filename);
                $industries->image_link = '/' . $path . '/' . $filename;
            }

            $industries->save();
            DB::commit();
            return response()->json($industries);
        } catch (\Throwable $th) {
            DB::rollBack();
            return response()->json($th);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $slug)
    {
        DB::beginTransaction();
        try {

            $industries = Industries::where('slug', $slug)->first();
            if ($industries->image_link) {
                fileDelete($industries->image_link);
            }
            $industries->delete();
            DB::commit();
            return response()->json($industries);
        } catch (\Throwable $th) {
            DB::rollBack();
            return response()->json($th);
        }
    }
}

<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Technology;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TechnologyController extends Controller
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
            if ($items>0) {
                $technologies = Technology::orderBy('order_by', 'desc')->take($items)->get();
            }else{
                $technologies = Technology::orderBy('order_by', 'desc')->get();
            }
            return response()->json($technologies);
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
            $technology = new Technology();
            $technology->name = $request->name;
            $technology->order_by = $request->order_by;

            if ($request->hasFile('image_link')) {
                $filename = time() . '-' . 'tech.' . fileInfo($request->image_link)['extension'];
                $path = 'uploads/technology';
                fileUpload($request->image_link, $path, $filename);
                $img = '/' .$path . '/' . $filename;
                $technology->image_link = $img;
            }
            $technology->save();
            DB::commit();
            return response()->json($technology);
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
            $technology = Technology::where('slug', $slug)->first();
            return response()->json($technology);
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
            $technology = Technology::where('id', $id)->first();
            return response()->json($technology);
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
            $technology = Technology::where('slug', $slug)->first();
            $technology->name = $request->name;
            $technology->order_by = $request->order_by;

            if ($request->hasFile('image_link')) {
                $filename = time() . '-' . 'tech.' . fileInfo($request->image_link)['extension'];
                $path = 'uploads/technology';

                if ($technology->image_link) {
                    fileDelete($technology->image_link);
                }
                fileUpload($request->image_link, $path, $filename);
                $technology->image_link = '/' .$path . '/' . $filename;
            }

            $technology->save();
            DB::commit();
            return response()->json($technology);
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
//        DB::beginTransaction();
//        try {

            $technology = Technology::where('slug', $slug)->first();
            if ($technology->image_link) {
                fileDelete($technology->image_link);
            }
            $technology->delete();
            //DB::commit();
            return response()->json($technology);
//        } catch (\Throwable $th) {
//            DB::rollBack();
//            return response()->json($th);
//        }
    }
}

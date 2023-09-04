<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Partner;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PartnerController extends Controller
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

            $partners = Partner::orderBy('id', 'asc')->get();
            return response()->json($partners);
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), $th->getCode());
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
            "index_of" => ["required", "string"],
            'image_link' => ['image', 'mimes:jpeg,png,jpg,gif,svg', 'max:2048'],
        ]);

        DB::beginTransaction();
        try {

            $partner = new Partner();
            $partner->name = $request->name;
            $partner->index_of = $request->index_of;
            $partner->description = $request->description;

            if ($request->hasFile('image_link')) {
                $filename = time() . '-' . 'client.' . fileInfo($request->image_link)['extension'];
                $path = 'uploads/partner';
                fileUpload($request->image_link, $path, $filename);
                $img = '/' . $path . '/' . $filename;
                $partner->image_link = $img;
            }

            $partner->save();
            DB::commit();
            return response()->json($partner);
        } catch (\Throwable $th) {
            DB::rollBack();
            return response()->json($th->getMessage(), $th->getCode());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        try {
            $partner = Partner::where('id', $id)->first();
            return response()->json($partner);
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), $th->getCode());
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            "name" => ["required", "string", "max:128"],
            "index_of" => ["required", "string"],
            'image_link' => ['image', 'mimes:jpeg,png,jpg,gif,svg', 'max:2048'],
        ]);

        DB::beginTransaction();
        try {

            $partner = Partner::where('id', $id)->first();
            $partner->name = $request->name;
            $partner->index_of = $request->index_of;
            $partner->description = $request->description;

            if ($request->hasFile('image_link')) {
                $filename = time() . '-' . 'client.' . fileInfo($request->image_link)['extension'];
                $path = 'uploads/partner';
                if ($partner->image_link) {
                    fileDelete($partner->image_link);
                }
                fileUpload($request->image_link, $path, $filename);
                $img = '/' . $path . '/' . $filename;
                $partner->image_link = $img;
            }

            $partner->save();
            DB::commit();
            return response()->json($partner);
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

            $partner = Partner::where('id', $id)->first();
            if ($partner->image_link) {
                fileDelete($partner->image_link);
            }
            $partner->delete();
            DB::commit();
            return response()->json($partner);
        } catch (\Throwable $th) {
            DB::rollBack();
            return response()->json($th->getMessage(), $th->getCode());
        }
    }
}

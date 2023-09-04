<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\OurManagement;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ManagementController extends Controller
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

            $managements = OurManagement::orderBy('index_of', 'asc')->get();
            return response()->json($managements);
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
            "type" => ["required", "max:10"],
            "name" => ["required", "string", "max:128"],
            "designation" => ["required", "string", "max:128"],
            "index_of" => ["required"],
            'avatar' => 'max:2024',
            "about" => ["required"],
        ]);

        DB::beginTransaction();
        try {

            $management = new OurManagement();
            $management->index_of = $request->index_of;
            $management->type = $request->type;
            $management->name = $request->name;
            $management->designation = $request->designation;
            $management->company = $request->company;
            $management->headshot = $request->headshot;
            $management->biography = $request->biography;
            $management->about = $request->about;
            $management->linkedin = $request->linkedin;
            $management->facebook = $request->facebook;
            $management->website = $request->website;
            $management->youtube = $request->youtube;
            $management->twitter = $request->twitter;

            if ($request->hasFile('avatar')) {
                $filename = time() . '-' . 'avatar.' . fileInfo($request->avatar)['extension'];
                $path = 'uploads/management';
                fileUpload($request->avatar, $path, $filename);
                $img = '/' . $path . '/' . $filename;
                $management->avatar = $img;
            }

            $management->save();
            DB::commit();
            return response()->json($management);
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
            $management = OurManagement::where('slug', $slug)->first();
            return response()->json($management);
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
            $management = OurManagement::where('id', $id)->first();
            return response()->json($management);
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
            "type" => ["required", "max:10"],
            "name" => ["required", "string", "max:128"],
            "designation" => ["required", "string", "max:128"],
            "index_of" => ["required"],
            'avatar' => 'max:2024',
            "about" => ["required"],
        ]);

        DB::beginTransaction();
        try {
            $management = OurManagement::where('slug', $slug)->first();
            $management->index_of = $request->index_of;
            $management->type = $request->type;
            $management->name = $request->name;
            $management->designation = $request->designation;
            $management->company = $request->company;
            $management->headshot = $request->headshot;
            $management->biography = $request->biography;
            $management->about = $request->about;
            $management->linkedin = $request->linkedin;
            $management->facebook = $request->facebook;
            $management->website = $request->website;
            $management->youtube = $request->youtube;
            $management->twitter = $request->twitter;

            if ($request->hasFile('avatar')) {
                $filename = time() . '-' . 'avatar.' . fileInfo($request->avatar)['extension'];
                $path = 'uploads/management';
                if ($management->avatar) {
                    fileDelete($management->avatar);
                }
                fileUpload($request->avatar, $path, $filename);
                $img = '/' . $path . '/' . $filename;
                $management->avatar = $img;
            }

            $management->save();
            DB::commit();
            return response()->json($management);
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

            $management = OurManagement::where('slug', $slug)->first();
            if ($management->avatar) {
                fileDelete($management->avatar);
            }
            $management->delete();
            DB::commit();
            return response()->json($management);
        } catch (\Throwable $th) {
            DB::rollBack();
            return response()->json($th->getMessage(), $th->getCode());
        }
    }
}

<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\OurTeams;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TeamsController extends Controller
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

            $teams = OurTeams::orderBy('id', 'asc')->get();
            return response()->json($teams);
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
            "designation" => ["required", "string", "max:128"],
            "phone" => ["required", "max:15"],
            "email" => "required|string|email|max:64|unique:our_teams",
            'avatar' => ['image', 'mimes:jpeg,png,jpg,gif,svg', 'max:2048'],
        ]);

        DB::beginTransaction();
        try {

            $team = new OurTeams();
            $team->name = $request->name;
            $team->designation = $request->designation;
            $team->phone = $request->phone;
            $team->email = $request->email;
            $team->website = $request->website;
            $team->twitter = $request->twitter;
            $team->linkedin = $request->linkedin;

            if ($request->hasFile('avatar')) {
                $filename = time() . '-' . 'avatar.' . fileInfo($request->avatar)['extension'];
                $path = 'uploads/teams';
                fileUpload($request->avatar, $path, $filename);
                $img = '/' . $path . '/' . $filename;
                $team->avatar = $img;
            }

            $team->save();
            DB::commit();
            return response()->json($team);
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
            $team = OurTeams::where('slug', $slug)->first();
            return response()->json($team);
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
            $team = OurTeams::where('id', $id)->first();
            return response()->json($team);
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), $th->getCode());
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $slug)
    {
        $team = OurTeams::where('slug', $slug)->first();
        $request->validate([
            "name" => ["required", "string", "max:128"],
            "designation" => ["required", "string", "max:128"],
            "phone" => ["required", "max:15"],
            "email" => "required|string|email|max:64|unique:our_teams,id," . $team->id,
            'avatar' => ['image', 'mimes:jpeg,png,jpg,gif,svg', 'max:2048'],
        ]);

        DB::beginTransaction();
        try {

            $team->name = $request->name;
            $team->designation = $request->designation;
            $team->phone = $request->phone;
            $team->email = $request->email;
            $team->website = $request->website;
            $team->twitter = $request->twitter;
            $team->linkedin = $request->linkedin;

            if ($request->hasFile('avatar')) {
                $filename = time() . '-' . 'avatar.' . fileInfo($request->avatar)['extension'];
                $path = 'uploads/teams';
                if ($team->avatar) {
                    fileDelete($team->avatar);
                }
                fileUpload($request->avatar, $path, $filename);
                $img = '/' . $path . '/' . $filename;
                $team->avatar = $img;
            }

            $team->save();
            DB::commit();
            return response()->json($team);
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

            $team = OurTeams::where('slug', $slug)->first();
            if ($team->avatar) {
                fileDelete($team->avatar);
            }
            $team->delete();
            DB::commit();
            return response()->json($team);
        } catch (\Throwable $th) {
            DB::rollBack();
            return response()->json($th->getMessage(), $th->getCode());
        }
    }
}

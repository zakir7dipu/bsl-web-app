<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Events\WorkshopSeminars;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class WorkshopController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['index', 'show']]);
    }

    public function index()
    {
        try {

            $workshops = WorkshopSeminars::with(['workshopDays.workshopSessions.sessionHosts.host'])->orderBy('id', 'asc')->get();

            return response()->json($workshops);

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
            "phone" => ["required", "max:15"],
            "email" => "required|string|email|max:64|unique:hosts",
            'thumbnail' => ['image', 'mimes:jpeg,png,jpg,gif,svg', 'max:2048'],
        ]);

        $input = $request->all();

        DB::beginTransaction();
        try {

            if ($request->hasFile('thumbnail')) {
                $filename = time() . '-' . 'host.' . fileInfo($request->thumbnail)['extension'];
                $path = 'uploads/hosts';
                fileUpload($request->thumbnail, $path, $filename);
                $img = '/' . $path . '/' . $filename;
                $input['thumbnail'] = $img;
            }

            $host = WorkshopSeminars::create($input);

            DB::commit();
            return response()->json($host);
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
            $host = WorkshopSeminars::where('id', $id)->first();
            return response()->json($host);
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
            $host = WorkshopSeminars::where('id', $id)->first();
            return response()->json($host);
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
            "name" => ["required", "string", "max:128"],
            "phone" => ["required", "max:15"],
            "email" => "required|string|email|max:64|unique:hosts,email," . $id,
        ]);

        if ($request->hasFile('thumbnail')) {
            $request->validate([
                'thumbnail' => ['image', 'mimes:jpeg,png,jpg,gif,svg', 'max:2048'],
            ]);
        }

        $host = WorkshopSeminars::where('id', $id)->first();

        DB::beginTransaction();
        try {

            $host->update($request->all());

            if ($request->hasFile('thumbnail')) {
                $filename = time() . '-' . 'host.' . fileInfo($request->thumbnail)['extension'];
                $path = 'uploads/hosts';
                if ($host->thumbnail) {
                    fileDelete($host->thumbnail);
                }
                fileUpload($request->thumbnail, $path, $filename);
                $img = '/' . $path . '/' . $filename;
                $host->thumbnail = $img;
            }

            $host->save();

            DB::commit();
            return response()->json($host);
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

            $host = WorkshopSeminars::where('id', $id)->first();
            if ($host->thumbnail) {
                fileDelete($host->image_link);
            }

            $host->delete();

            DB::commit();
            return response()->json($host);
        } catch (\Throwable $th) {
            DB::rollBack();
            return response()->json($th->getMessage(), $th->getCode());
        }
    }

}

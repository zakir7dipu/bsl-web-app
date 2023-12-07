<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Events\WorkshopOrganizer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class WorkshopOrganizerController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['index']]);
    }

    /**
     * Display a listing of the resource.
     */
    public function index($id)
    {
        $organizers = WorkshopOrganizer::with('workshopSeminar')->where('workshop_seminar_id', $id)->get();
        try {
            return response()->json($organizers);
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
            "workshop_seminar_id" => ["required"],
            "title" => ["required", "string"],
            'thumbnail' => ['nullable', 'image', 'mimes:jpeg,png,jpg,gif,svg', 'max:2048']
        ]);

        DB::beginTransaction();
        try {

            $model = WorkshopOrganizer::create($request->all());

            if ($request->hasFile('thumbnail')) {
                $filename = time() . '-' . 'organizer.' . fileInfo($request->thumbnail)['extension'];
                $path = 'uploads/organizer';
                fileUpload($request->thumbnail, $path, $filename);
                $img = '/' . $path . '/' . $filename;
                $model->thumbnail = $img;
                $model->save();
            }

            DB::commit();
            return response()->json($model);
        } catch (\Throwable $th) {
            DB::rollback();
            return response()->json($th->getMessage(), $th->getCode());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $course = WorkshopOrganizer::with('workshopSeminar')->where('id', $id)
            ->first();
        try {
            return response()->json($course);
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), $th->getCode());
        }
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
        $request->validate([
            "workshop_seminar_id" => ["required"],
            "title" => ["required", "string"],
            'thumbnail' => ['nullable', 'image', 'mimes:jpeg,png,jpg,gif,svg', 'max:2048']
        ]);


        $model = WorkshopOrganizer::findOrFail($id);

        DB::beginTransaction();
        try {
            $model->update($request->all());

            if ($request->hasFile('thumbnail')) {
                $filename = time() . '-' . 'organizer.' . fileInfo($request->thumbnail)['extension'];
                $path = 'uploads/organizer';
                if ($model->thumbnail) {
                    fileDelete($model->thumbnail);
                }
                fileUpload($request->thumbnail, $path, $filename);
                $img = '/' . $path . '/' . $filename;
                $model->thumbnail = $img;
                $model->save();
            }

            DB::commit();
            return response()->json($model);
        } catch (\Throwable $th) {
            DB::rollback();
            return response()->json($th->getMessage(), $th->getCode());
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {

        try {

            $model = WorkshopOrganizer::where('id', $id)->first();
            
            if ($model->thumbnail) {
                fileDelete($model->thumbnail);
            }

            $model->delete();

            return response()->json($model);

        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), $th->getCode());
        }
    }
}

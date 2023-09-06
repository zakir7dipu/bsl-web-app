<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Curricular;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CurricularController extends Controller
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
        $curricular = Curricular::with('course')->where('course_id', $id)->get();
        try {
            return response()->json($curricular);
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
            "course_id" => ["required"],
            "name" => ["required", "string"],
        ]);

        DB::beginTransaction();
        try {
            $model = new Curricular();
            $model->course_id = $request->course_id;
            $model->name = $request->name;
            $model->description = $request->description;
            $model->save();
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
        $course = Curricular::where('id', $id)
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
            "course_id" => ["required"],
            "name" => ["required", "string"],
        ]);

        DB::beginTransaction();
        try {

            $model = Curricular::findOrfail($id);
            $model->course_id = $request->course_id;
            $model->name = $request->name;
            $model->description = $request->description;
            $model->save();

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

            $curricular = Curricular::where('id', $id)->first();
            $curricular->delete();

            return response()->json($curricular);

        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), $th->getCode());
        }
    }
}

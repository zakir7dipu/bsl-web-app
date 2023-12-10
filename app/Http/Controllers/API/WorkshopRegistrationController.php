<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Events\WorkshopRegistration;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class WorkshopRegistrationController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['index', 'store']]);
    }

    /**
     * Display a listing of the resource.
     */
    public function index($id)
    {
        $workshopUsers = WorkshopRegistration::with('workshopSeminar')->where('workshop_seminar_id', $id)->get();
        try {
            return response()->json($workshopUsers);
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
            "name" => ["required", "string"],
            "email" => ["required", "email"],
            "phone" => ["required"],
            "designation" => ["nullable", 'string'],
            "linkedin" => ["nullable", 'string'],
        ]);

        DB::beginTransaction();
        try {

            $model = WorkshopRegistration::create($request->all());

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
        $course = WorkshopRegistration::with('workshopSeminar')->where('id', $id)
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
            "name" => ["required", "string"],
            "email" => ["required", "email"],
            "phone" => ["required"],
            "designation" => ["nullable", 'string'],
            "linkedin" => ["nullable", 'string'],
        ]);


        $model = WorkshopRegistration::findOrFail($id);

        DB::beginTransaction();
        try {
            $model->update($request->all());

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

            $model = WorkshopRegistration::where('id', $id)->first();

            $model->delete();

            return response()->json($model);

        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), $th->getCode());
        }
    }
}

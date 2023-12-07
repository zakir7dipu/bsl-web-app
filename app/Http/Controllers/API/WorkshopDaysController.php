<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Events\SessionHosts;
use App\Models\Events\WorkshopDays;
use App\Models\Events\WorkshopSessions;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class WorkshopDaysController extends Controller
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
        $workshopDays = WorkshopDays::with('workshopSeminar')->where('workshop_seminar_id', $id)->get();
        try {
            return response()->json($workshopDays);
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
            "date" => ["required"],
        ]);

        DB::beginTransaction();
        try {
            $model = WorkshopDays::create($request->all());

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
        $course = WorkshopDays::with('workshopSeminar')->where('id', $id)
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
            "date" => ["required"],
        ]);


        $model = WorkshopDays::findOrFail($id);

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

            $day = WorkshopDays::where('id', $id)->first();

            SessionHosts::whereHas('workshopSession.workshopDay', function ($query) use ($id) {
                return $query->where('id', $id);
            })->delete();

            WorkshopSessions::whereHas('workshopDay', function ($query) use ($id) {
                return $query->where('id', $id);
            })->delete();

            $day->delete();

            return response()->json($day);

        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), $th->getCode());
        }
    }
}

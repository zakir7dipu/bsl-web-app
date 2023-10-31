<?php

namespace App\Http\Controllers;

use App\Models\Schedules;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ScheduleController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['index', 'store']]);
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {

            $schedules = Schedules::orderBy('id', 'desc')->get();

            return response()->json($schedules);
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), $th->getCode());
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            "name" => ["required", "string", "max:128"],
            "email" => ["required", "email", "max:128"],
            "phone" => ["required", "string", "max:15"],
            "company_name" => ["required", "string", "max:128"],
            "description" => ["required", "string"],
        ]);

        DB::beginTransaction();
        try {
            DB::commit();
            $schedule = Schedules::create($request->all());
            return response()->json($schedule);
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
            $schedule = Schedules::where('id', $id)->first();
            return response()->json($schedule);
        } catch (\Throwable $th) {
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

            $schedule = Schedules::where('id', $id)->first();

            $schedule->delete();
            DB::commit();
            return response()->json($schedule);
        } catch (\Throwable $th) {
            DB::rollBack();
            return response()->json($th->getMessage(), $th->getCode());
        }
    }
}

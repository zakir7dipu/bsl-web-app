<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Events\SessionHosts;
use App\Models\Events\WorkshopSessions;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class WorkshopSessionsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['index','show']]);
    }

    /**
     * Display a listing of the resource.
     */

    public function index($id)
    {
        try {
            $workshopSessions = WorkshopSessions::with(['workshopDay', 'sessionHosts.host'])
                ->where('workshop_day_id', $id)
                ->get();
            return response()->json($workshopSessions);
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
            "workshop_day_id" => ["required"],
            "title" => ["required", "string"],
            "from" => ["required"],
            "to" => ["required"],
            "topics" => ["required"],
            "host_id" => ["required"],
        ]);

        DB::beginTransaction();

        try {
            $model = WorkshopSessions::create($request->all());

            SessionHosts::create([
                'workshop_session_id' => $model->id,
                'host_id' => $request->host_id
            ]);

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
        $session = WorkshopSessions::with(['sessionHosts'])->where('id', $id)
            ->first();
        try {
            return response()->json($session);
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), $th->getCode());
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $session = WorkshopSessions::where('id', $id)
            ->first();
        try {
            return response()->json($session);
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
            "workshop_day_id" => ["required"],
            "title" => ["required", "string"],
            "from" => ["required"],
            "to" => ["required"],
            "topics" => ["required"],
        ]);

        DB::beginTransaction();

        $model = WorkshopSessions::findOrFail($id);

        try {
            $model->update($request->all());

            SessionHosts::where('workshop_session_id', $model->id)->update([
                'host_id' => $request->host_id
            ]);

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

            $session = WorkshopSessions::where('id', $id)->first();

            //Delete pivot table first
            SessionHosts::whereHas('workshopSession', function ($query) use ($id) {
                return $query->where('id', $id);
            })->delete();

            // Delete sessions data
            $session->delete();

            return response()->json($session);

        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), $th->getCode());
        }
    }
}

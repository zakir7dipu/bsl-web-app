<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Events\SessionHosts;
use App\Models\Events\WorkshopDays;
use App\Models\Events\WorkshopSeminars;
use App\Models\Events\WorkshopSessions;
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
            "form_date" => ["required", "max:32"],
            "to_date" => ["required", "max:32"],
            "type" => ["required"],
            "description" => ["required"],
            "days" => ["required"],
            'image_link' => ['nullable', 'image', 'mimes:jpeg,png,jpg,gif,svg', 'max:2048']
        ]);

        $input = $request->all();

        DB::beginTransaction();
        try {

            if ($request->hasFile('image_link')) {
                $filename = time() . '-' . 'host.' . fileInfo($request->image_link)['extension'];
                $path = 'uploads/workshop';
                fileUpload($request->image_link, $path, $filename);
                $img = '/' . $path . '/' . $filename;
                $input['image_link'] = $img;
            }

            $workshop = WorkshopSeminars::create($input);

            $days = json_decode($request->days, false);
            if (isset($days)) {
                foreach ($days as $day) {
                    $workshopDay = WorkshopDays::create([
                        'workshop_seminar_id' => $workshop->id,
                        'title' => $day->title,
                    ]);

                    if (count($day->sessions) > 0) {
                        foreach ($day->sessions as $session) {
                            $daySession = WorkshopSessions::create([
                                'workshop_day_id' => $workshopDay->id,
                                'title' => $session->title,
                                'from' => $session->from,
                                'to' => $session->to,
                                'topics' => $session->topics
                            ]);
                            SessionHosts::create([
                                'workshop_session_id' => $daySession->id,
                                'host_id' => $session->mentors
                            ]);
                        }
                    }
                }
            }

            DB::commit();
            return response()->json($workshop);
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
            $host = WorkshopSeminars::with(['workshopDays.workshopSessions.sessionHosts.host'])
                ->where('slug', $slug)
                ->first();
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
            $host = WorkshopSeminars::with(['workshopDays.workshopSessions.sessionHosts.host'])
                ->where('id', $id)
                ->first();
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
            "form_date" => ["required", "max:32"],
            "to_date" => ["required", "max:32"],
            "type" => ["required"],
            "description" => ["required"],
            "days" => ["required"],
        ]);

        if ($request->hasFile('image_link')) {
            $request->validate([
                'image_link' => ['image', 'mimes:jpeg,png,jpg,gif,svg', 'max:2048'],
            ]);
        }

        $workshop = WorkshopSeminars::where('id', $id)->first();

        DB::beginTransaction();
        try {

            if ($request->hasFile('image_link')) {
                $filename = time() . '-' . 'host.' . fileInfo($request->image_link)['extension'];
                $path = 'uploads/workshop';
                fileUpload($request->image_link, $path, $filename);
                $img = '/' . $path . '/' . $filename;
                $input['image_link'] = $img;
            }

            $workshop->update($request->all());

            $days = json_decode($request->days, false);
            if (isset($days)) {
                foreach ($days as $day) {
                    $workshopDay = WorkshopDays::create([
                        'workshop_seminar_id' => $workshop->id,
                        'title' => $day->title,
                    ]);

                    if (count($day->sessions) > 0) {
                        foreach ($day->sessions as $session) {
                            $daySession = WorkshopSessions::create([
                                'workshop_day_id' => $workshopDay->id,
                                'title' => $session->title,
                                'from' => $session->from,
                                'to' => $session->to,
                                'topics' => $session->topics
                            ]);
                            SessionHosts::create([
                                'workshop_session_id' => $daySession->id,
                                'host_id' => $session->mentors
                            ]);
                        }
                    }
                }
            }

            DB::commit();
            return response()->json($workshop);
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

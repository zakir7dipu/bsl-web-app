<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\CaseStudies;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CaseStudyController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['index', 'show']]);
    }

    /**
     * Display a listing of the resource.
     */
    public function index($items)
    {
        try {
            if ($items > 0) {
                $caseStudies = CaseStudies::orderBy('id', 'desc')->take($items)->get();
            } else {
                $caseStudies = CaseStudies::orderBy('id', 'desc')->get();
            }
            return response()->json($caseStudies);
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), $th->getCode());
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            "name" => ["required", "string", "max:128"],
            "descriptions" => ["required", "max:10"],
            "clients" => ["required", "string"],
            "location" => ["required", "string"],
            "complete_date" => ["required", "string"],
            'image_link' => ['image', 'mimes:jpeg,png,jpg,gif,svg', 'max:2048']
        ]);

        $input = $request->all();

        DB::beginTransaction();
        try {

            if ($request->hasFile('image_link')) {
                $filename = time() . '-' . 'case-study.' . fileInfo($request->image_link)['extension'];
                $path = 'uploads/caseStudy';
                fileUpload($request->image_link, $path, $filename);
                $img = '/' . $path . '/' . $filename;
                $input['image_link'] = $img;
            }

            $case_study = CaseStudies::create($input);

            DB::commit();
            return response()->json($case_study);
        } catch (\Throwable $th) {
            DB::rollBack();
            return response()->json($th, $th->getCode());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        try {
            $case_study = CaseStudies::where('id', $id)->first();
            return response()->json($case_study);
        } catch (\Throwable $th) {
            return response()->json($th, $th->getCode());
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
            "name" => ["required", "string", "max:128"],
            "descriptions" => ["required", "max:10"],
            "clients" => ["required", "string"],
            "location" => ["required", "string"],
            "complete_date" => ["required", "string"],
            'image_link' => ['image', 'mimes:jpeg,png,jpg,gif,svg', 'max:2048']
        ]);

        $input = $request->all();

        $case_study = CaseStudies::findOrFail($id);

        DB::beginTransaction();
        try {

            if ($request->hasFile('image_link')) {
                $filename = time() . '-' . 'case-study.' . fileInfo($request->image_link)['extension'];
                $path = 'uploads/caseStudy';
                if ($case_study->image_link) {
                    fileDelete($case_study->image_link);
                }
                fileUpload($request->image_link, $path, $filename);
                $img = '/' . $path . '/' . $filename;
                $input['image_link'] = $img;
            }

            $case_study->update($input);

            DB::commit();
            return response()->json($case_study);
        } catch (\Throwable $th) {
            DB::rollBack();
            return response()->json($th, $th->getCode());
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        DB::beginTransaction();
        try {

            $case_study = CaseStudies::where('id', $id)->first();
            if ($case_study->image_link) {
                fileDelete($case_study->image_link);
            }
            $case_study->delete();
            DB::commit();
            return response()->json($case_study);
        } catch (\Throwable $th) {
            DB::rollBack();
            return response()->json($th, $th->getCode());
        }
    }
}

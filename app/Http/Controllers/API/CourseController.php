<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Courses;
use App\Models\Services;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class CourseController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['index', 'show']]);
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {

            $courses = Courses::with(['service', 'curriculums'])->orderBy('id', 'asc')->get();

            return response()->json($courses);
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), $th->getCode());
        }
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        try {
            $services = Services::where('type', 'training')->where('parent_id','!=',null)->orderBy('id', 'asc')->get();
            return response()->json($services);
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), $th->getCode());
        }
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $request->validate([
            "name" => ["required", "string"],
            "service_id" => ["required", "string"],
            "description" => ["required", "string"],
            "price" => ["required"],
            "duration" => ["required"],
            "class_count" => ["required"],
            "class_per_week" => ["required"],
            "class_duration" => ["required"],
            "delivery_mode" => ["required"],
            "language" => ["required"],
            "curriculum_text" => ["required"],
            "course_type" => ["required"],
        ]);

        $input = $request->all();

        $input['slug'] = Str::slug($request->name);

        $model = Courses::where('slug', $input['slug'])->exists();

        DB::beginTransaction();
        if (!$model) {
            try {

                if ($request->hasFile("thumbnail")) {
                    $filename = time() . '-' . 'thumbnail.' . fileInfo($request->thumbnail)['extension'];
                    $path = '/uploads/thumbnail';
                    fileUpload($request->thumbnail, $path, $filename);
                    $img = $path . '/' . $filename;
                    $input['thumbnail'] = $img;
                }

                if ($request->hasFile("banner")) {
                    $filename = time() . '-' . 'banner.' . fileInfo($request->banner)['extension'];
                    $path = '/uploads/banner';
                    fileUpload($request->banner, $path, $filename);
                    $img = $path . '/' . $filename;
                    $input['banner'] = $img;
                }

                $course = Courses::create($input);

                DB::commit();

                return response()->json($course);
            } catch (\Throwable $th) {
                DB::rollback();
                return response()->json([
                    'status' => 'error',
                    'message' => $th->getMessage()
                ], $th->getCode());
            }
        } else {
            return returnBack('Already data exists with this name');
        }

    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Course $course
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $course = Courses::where('id', $id)
            ->first();
        try {
            return response()->json($course);
        } catch (\Throwable $th) {
            return returnBack($th);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Models\Course $course
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $course = Courses::where('id', $id)
            ->first();
        try {
            return response()->json($course);
        } catch (\Throwable $th) {
            return returnBack($th);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\Course $course
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            "name" => ["required", "string"],
            "description" => ["required", "string"],
            "price" => ["required"],
            "duration" => ["required"],
            "class_count" => ["required"],
            "class_per_week" => ["required"],
            "class_duration" => ["required"],
            "delivery_mode" => ["required"],
            "language" => ["required"],
            "curriculum_text" => ["required"],
            "course_type" => ["required"],
        ]);

        $input = $request->all();

        $input['slug'] = Str::slug($request->name);

        $course = Courses::where('id', $id)->first();

        DB::beginTransaction();
        if ($course) {
            try {


                if ($request->hasFile("thumbnail")) {
                    $filename = time() . '-' . 'thumbnail.' . fileInfo($request->thumbnail)['extension'];
                    $path = '/uploads/thumbnail';
                    if ($course->thumbnail) {
                        fileDelete($request->thumbnail);
                    }
                    fileUpload($request->thumbnail, $path, $filename);
                    $img = $path . '/' . $filename;
                    $input['thumbnail'] = $img;
                }

                if ($request->hasFile("banner")) {
                    $filename = time() . '-' . 'banner.' . fileInfo($request->banner)['extension'];
                    $path = '/uploads/banner';
                    if ($course->banner) {
                        fileDelete($request->banner);
                    }
                    fileUpload($request->banner, $path, $filename);
                    $img = $path . '/' . $filename;
                    $input['banner'] = $img;
                }

                $course->update($input);

                DB::commit();

                return response()->json($course);
            } catch (\Throwable $th) {
                DB::rollback();
                return returnBack($th);
            }
        } else {
            return returnBack('No Data Found!');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Courses $slug
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {

        DB::beginTransaction();
        try {

            $course = Courses::where('id', $id)->first();
            $delete = $course->delete();
            DB::commit();
            return response()->json($course);

        } catch (\Throwable $th) {
            DB::rollBack();
            return returnBack($th);
        }
    }

}

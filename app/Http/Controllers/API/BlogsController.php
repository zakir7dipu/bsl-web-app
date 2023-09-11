<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Blogs;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class BlogsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['index', 'show', 'allData']]);
    }

    /**
     * Display a listing of the resource.
     */
    public function index($items)
    {
        try {
            if ($items > 0) {
                $blogs = Blogs::orderBy('short_order', 'desc')->take($items)->get();
            } else {
                $blogs = Blogs::orderBy('short_order', 'desc')->get();
            }
            return response()->json($blogs);
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), $th->getCode());
        }
    }

    /**
     * Display a listing of the resource.
     */
    public function allData()
    {
        try {

            $blogs = Blogs::orderBy('short_order', 'desc')->paginate(1);

            return response()->json($blogs);
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
            "title" => ["required", "string", "max:256"],
            "short_order" => ["required", "max:10"],
            "description" => ["required", "string"],
            'image_link' => 'max:2024'
        ]);

        $input = $request->all();
        $input['slug'] = Str::slug($request->title);

        DB::beginTransaction();
        try {

            if ($request->hasFile('image_link')) {
                $filename = time() . '-' . 'blog.' . fileInfo($request->image_link)['extension'];
                $path = 'uploads/blogs';
                fileUpload($request->image_link, $path, $filename);
                $img = '/' . $path . '/' . $filename;
                $input['image_link'] = $img;
                $input['meta_image_link'] = $img;
            }

            $blog = Blogs::create($input);

            DB::commit();
            return response()->json($blog);
        } catch (\Throwable $th) {
            DB::rollBack();
            return response()->json($th, $th->getCode());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $slug)
    {
        try {
            $blog = Blogs::where('slug', $slug)->first();
            return response()->json($blog);
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
            "title" => ["required", "string", "max:128"],
            "short_order" => ["required", "max:10"],
            "description" => ["required", "string"],
            'image_link' => 'max:2024'
        ]);

        $input = $request->all();
        $input['slug'] = Str::slug($request->title);

        $blog = Blogs::findOrFail($id);

        DB::beginTransaction();
        try {

            if ($request->hasFile('image_link')) {
                $filename = time() . '-' . 'blog.' . fileInfo($request->image_link)['extension'];
                $path = 'uploads/blogs';
                if ($blog->image_link) {
                    fileDelete($blog->image_link);
                }
                fileUpload($request->image_link, $path, $filename);
                $img = '/' . $path . '/' . $filename;
                $input['image_link'] = $img;
                $input['meta_image_link'] = $img;
            }

            $blog->update($input);

            DB::commit();
            return response()->json($blog);
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

            $blog = Blogs::where('id', $id)->first();
            if ($blog->image_link) {
                fileDelete($blog->image_link);
            }
            $blog->delete();
            DB::commit();
            return response()->json($blog);
        } catch (\Throwable $th) {
            DB::rollBack();
            return response()->json($th, $th->getCode());
        }
    }
}

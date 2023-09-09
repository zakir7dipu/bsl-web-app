<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Testimonials;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TestimonialController extends Controller
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
				$testimonials = Testimonials::orderBy('id', 'desc')->take($items)->get();
			} else {
				$testimonials = Testimonials::orderBy('id', 'desc')->get();
			}
			return response()->json($testimonials);
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
			"designation" => ["required"],
			"description" => ["required", "string"],
			'image_link' => ['image', 'max:2048']
		]);

		$input = $request->all();

		DB::beginTransaction();
		try {

			if ($request->hasFile('image_link')) {
				$filename = time() . '-' . 'testimonial.' . fileInfo($request->image_link)['extension'];
				$path = 'uploads/testimonial';
				fileUpload($request->image_link, $path, $filename);
				$img = '/' . $path . '/' . $filename;
				$input['image_link'] = $img;
			}

			$testimonial = Testimonials::create($input);

			DB::commit();
			return response()->json($testimonial);
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
			$testimonial = Testimonials::where('id', $id)->first();
			return response()->json($testimonial);
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
			"designation" => ["required"],
			"description" => ["required", "string"],
		]);

		$input = $request->all();

		$testimonial = Testimonials::findOrFail($id);

		DB::beginTransaction();
		try {

			if ($request->hasFile('image_link')) {
				$filename = time() . '-' . 'testimonial.' . fileInfo($request->image_link)['extension'];
				$path = 'uploads/testimonial';
				if ($testimonial->image_link) {
					fileDelete($testimonial->image_link);
				}
				fileUpload($request->image_link, $path, $filename);
				$img = '/' . $path . '/' . $filename;
				$input['image_link'] = $img;
			}

			$testimonial->update($input);

			DB::commit();
			return response()->json($testimonial);
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

			$testimonial = Testimonials::where('id', $id)->first();
			if ($testimonial->image_link) {
				fileDelete($testimonial->image_link);
			}
			$testimonial->delete();
			DB::commit();
			return response()->json($testimonial);
		} catch (\Throwable $th) {
			DB::rollBack();
			return response()->json($th, $th->getCode());
		}
	}


	public function search(Request $request)
	{
		try {
			$search_keywords = $request->has('search_text')? trim($request->search_text) : '';

			$testimonials = Testimonials::when(!empty($search_keywords), function ($query) use($search_keywords){
				return $query->orWhere('name', 'LIKE', '%' . $search_keywords . '%')
					->orWhere('designation', 'LIKE', '%' . $search_keywords . '%')
					->orWhere('description', 'LIKE', '%' . $search_keywords . '%');
			})->orderBy('id', 'desc')->get();

			return response()->json($testimonials);
		} catch (\Throwable $th) {
			return response()->json($th->getMessage(), $th->getCode());
		}
	}
}

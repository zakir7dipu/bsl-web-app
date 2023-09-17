<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Pages;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class PagesController extends Controller
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
				$pages = Pages::orderBy('id', 'desc')->get();
			return response()->json($pages);
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
			"title" => ["required", "string", "max:128"],
			"description" => ["required", "string"],
			'image_link' => ['image', 'max:2048']
		]);

		$input = $request->all();
		$input['slug'] = Str::slug($input['title']);
		$model = Pages::where('slug', $input['slug'])->exists();
		DB::beginTransaction();
		if (!$model) {
			try {

				if ($request->hasFile('image_link')) {
					$filename = time() . '-' . 'page.' . fileInfo($request->image_link)['extension'];
					$path = 'uploads/page';
					fileUpload($request->image_link, $path, $filename);
					$img = '/' . $path . '/' . $filename;
					$input['image_link'] = $img;
				}

				$page = Pages::create($input);

				DB::commit();
				return response()->json($page);
			} catch (\Throwable $th) {
				DB::rollBack();
				return response()->json($th, $th->getCode());
			}
		} else {
			return response()->json('Already data exists with this name', 409);
		}
	}

	/**
	 * Display the specified resource.
	 */
	public function show(string $slug)
    {
        try {
            $page = Pages::where('slug', $slug)->first();
            return response()->json($page);
        } catch (\Throwable $th) {
            return response()->json($th, $th->getCode());
        }
    }

	/**
	 * Update the specified resource in storage.
	 */
	public function update(Request $request, string $id)
	{
		$request->validate([
			"title" => ["required", "string", "max:128"],
			"description" => ["required", "string"],
		]);

		$input = $request->all();
		$input['slug'] = Str::slug($input['title']);
		$page = Pages::findOrFail($id);

		DB::beginTransaction();
		try {

			if ($request->hasFile('image_link')) {
				$filename = time() . '-' . 'page.' . fileInfo($request->image_link)['extension'];
				$path = 'uploads/page';
				if ($page->image_link) {
					fileDelete($page->image_link);
				}
				fileUpload($request->image_link, $path, $filename);
				$img = '/' . $path . '/' . $filename;
				$input['image_link'] = $img;
			}

			$page->update($input);

			DB::commit();
			return response()->json($page);
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

			$page = Pages::where('id', $id)->first();
			if ($page->image_link) {
				fileDelete($page->image_link);
			}
			$page->delete();
			DB::commit();
			return response()->json($page);
		} catch (\Throwable $th) {
			DB::rollBack();
			return response()->json($th, $th->getCode());
		}
	}


	public function search(Request $request)
	{
		try {
			$search_keywords = $request->has('search_text') ? trim($request->search_text) : '';

			$pages = Pages::when(!empty($search_keywords), function ($query) use ($search_keywords) {
				return $query->orWhere('title', 'LIKE', '%' . $search_keywords . '%')
					->orWhere('description', 'LIKE', '%' . $search_keywords . '%');
			})->orderBy('id', 'desc')->get();

			return response()->json($pages);
		} catch (\Throwable $th) {
			return response()->json($th->getMessage(), $th->getCode());
		}
	}
}

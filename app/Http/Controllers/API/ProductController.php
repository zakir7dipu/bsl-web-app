<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Products;
use App\Models\Services;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['index', 'show','productsAll']]);
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {

            $products = Products::with('service')->orderBy('id', 'asc')->get();
            $services = Services::where('type','product')->orderBy('id', 'asc')->get();

            $data = [
                'products' => $products,
                'services' => $services,
            ];

            return response()->json($data);
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), $th->getCode());
        }
    }

    public function productsAll($id)
    {
        try {
            $products = Products::where('service_id',$id)->with('service')->orderBy('id', 'asc')->paginate(12);
            return response()->json($products);
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
            "brief" => ["string"],
            "description" => ["required", "string"],
            'image_link' => ['image', 'mimes:jpeg,png,jpg,gif,svg', 'max:2048'],
        ]);

        DB::beginTransaction();
        try {

            $product = new Products();
            $product->title = $request->title;
            $product->service_id = $request->service_id ?? null;
            $product->brief = $request->brief;
            $product->description = $request->description;

            if ($request->hasFile('image_link')) {
                $filename = time() . '-' . 'product.' . fileInfo($request->image_link)['extension'];
                $path = 'uploads/products';
                fileUpload($request->image_link, $path, $filename);
                $img = '/' . $path . '/' . $filename;
                $product->image_link = $img;
            }

            $product->save();
            DB::commit();
            return response()->json($product);
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

            $product = Products::with('service')->where('slug', $slug)->first();
            return response()->json($product);

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
            "title" => ["required", "string", "max:128"],
            "brief" => ["string"],
            "description" => ["required", "string"],
            'image_link' => ['image', 'mimes:jpeg,png,jpg,gif,svg', 'max:2048'],
        ]);

        DB::beginTransaction();
        try {

            $product = Products::where('id', $id)->first();
            $product->title = $request->title;
            $product->service_id = $request->service_id ?? null;
            $product->brief = $request->brief;
            $product->description = $request->description;

            if ($request->hasFile('image_link')) {
                $filename = time() . '-' . 'product.' . fileInfo($request->image_link)['extension'];
                $path = 'uploads/products';
                if ($product->image_link) {
                    fileDelete($product->image_link);
                }

                fileUpload($request->image_link, $path, $filename);
                $img = '/' . $path . '/' . $filename;
                $product->image_link = $img;
            }

            $product->save();
            DB::commit();
            return response()->json($product);
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
            $product = Products::where('id', $id)->first();
            $product->delete();
            DB::commit();
            return response()->json($product);
        } catch (\Throwable $th) {
            DB::rollBack();
            return response()->json($th->getMessage(), $th->getCode());
        }
    }
}

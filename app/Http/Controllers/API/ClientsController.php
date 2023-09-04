<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Clients;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ClientsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['index']]);
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {

            $clients = Clients::orderBy('id', 'asc')->get();
            return response()->json($clients);
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
            "index_of" => ["required", "string"],
            'image_link' => ['image', 'mimes:jpeg,png,jpg,gif,svg', 'max:2048'],
        ]);

        DB::beginTransaction();
        try {

            $client = new Clients();
            $client->name = $request->name;
            $client->index_of = $request->index_of;
            $client->description = $request->description;

            if ($request->hasFile('image_link')) {
                $filename = time() . '-' . 'client.' . fileInfo($request->image_link)['extension'];
                $path = 'uploads/clients';
                fileUpload($request->image_link, $path, $filename);
                $img = '/' . $path . '/' . $filename;
                $client->image_link = $img;
            }

            $client->save();
            DB::commit();
            return response()->json($client);
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
            $client = Clients::where('id', $id)->first();
            return response()->json($client);
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), $th->getCode());
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            "name" => ["required", "string", "max:128"],
            "index_of" => ["required", "string"],
            'image_link' => ['image', 'mimes:jpeg,png,jpg,gif,svg', 'max:2048'],
        ]);

        DB::beginTransaction();
        try {

            $client = Clients::where('id', $id)->first();
            $client->name = $request->name;
            $client->index_of = $request->index_of;
            $client->description = $request->description;

            if ($request->hasFile('image_link')) {
                $filename = time() . '-' . 'client.' . fileInfo($request->image_link)['extension'];
                $path = 'uploads/teams';
                if ($client->image_link) {
                    fileDelete($client->image_link);
                }
                fileUpload($request->image_link, $path, $filename);
                $img = '/' . $path . '/' . $filename;
                $client->image_link = $img;
            }

            $client->save();
            DB::commit();
            return response()->json($client);
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

            $client = Clients::where('id', $id)->first();
            if ($client->image_link) {
                fileDelete($client->image_link);
            }
            $client->delete();
            DB::commit();
            return response()->json($client);
        } catch (\Throwable $th) {
            DB::rollBack();
            return response()->json($th->getMessage(), $th->getCode());
        }
    }
}

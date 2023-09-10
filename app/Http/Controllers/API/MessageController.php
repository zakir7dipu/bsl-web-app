<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Messages;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class MessageController extends Controller
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

            $messages = Messages::orderBy('id', 'desc')->get();

            return response()->json($messages);
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
            "subject" => ["required", "string", "max:128"],
            "description" => ["required", "string"],
        ]);

        DB::beginTransaction();
        try {
            DB::commit();
            $message = Messages::create($request->all());
            return response()->json($message);
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
            $message = Messages::where('id', $id)->first();
            return response()->json($message);
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

            $message = Messages::where('id', $id)->first();

            $message->delete();
            DB::commit();
            return response()->json($message);
        } catch (\Throwable $th) {
            DB::rollBack();
            return response()->json($th->getMessage(), $th->getCode());
        }
    }
}

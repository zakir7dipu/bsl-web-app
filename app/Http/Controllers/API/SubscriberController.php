<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Subscribers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SubscriberController extends Controller
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

            $subscribers = Subscribers::orderBy('id', 'desc')->get();

            return response()->json($subscribers);
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
            "email" => ["required", "email", "max:128"],
        ]);

        DB::beginTransaction();
        try {
            DB::commit();
            $subscriber = Subscribers::create($request->all());
            return response()->json($subscriber);
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
            $subscriber = Subscribers::where('id', $id)->first();
            return response()->json($subscriber);
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

            $subscriber = Subscribers::where('id', $id)->first();

            $subscriber->delete();
            DB::commit();
            return response()->json($subscriber);
        } catch (\Throwable $th) {
            DB::rollBack();
            return response()->json($th->getMessage(), $th->getCode());
        }
    }
}

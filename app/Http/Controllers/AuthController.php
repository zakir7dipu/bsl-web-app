<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;

class AuthController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login','refresh']]);
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);

        try {
            $credentials = $request->only('email', 'password');

            $token = Auth::attempt($credentials);
            if (!$token) {
                return response()->json([
                    'status' => 'error',
                    'message' => 'Unauthorized',
                ], 401);
            }

            $user = Auth::user();
            return response()->json([
                'status' => 'success',
                'user' => $user,
                'authorisation' => [
                    'token' => $token,
                    'type' => 'bearer',
                ]
            ]);
        } catch (\Exception $e) {
            return response()->json($e-> getMessage(), $e->getCode());
        }
    }

    public function register(Request $request){
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
        ]);

        try {
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);

            $token = Auth::login($user);
            return response()->json([
                'status' => 'success',
                'message' => 'User created successfully',
                'user' => $user,
                'authorisation' => [
                    'token' => $token,
                    'type' => 'bearer',
                ]
            ]);
        } catch (\Throwable $th) {
            return returnBack($th);
        }
    }

    public function logout()
    {
        Auth::logout();
        return response()->json([
            'status' => 'success',
            'message' => 'Successfully logged out',
        ]);
    }

    public function refresh()
    {
        if (Auth::check()) {
            $user = Auth::user();
            $user->avatar = $user->avatar? config('app.url').'/'.$user->avatar : get_gravatar($user->email);
            return response()->json([
                'status' => 'success',
                'user' => $user,
            ]);
        } else {
            return response()->json([
                'status' => 'reject',
                'user' => [],
            ]);
        }
    }

    public function passwordSet(Request $request)
    {
        $request->validate([
            'confirm_password' => 'required|string|min:6',
        ]);
        Auth::user()->update(["password" => Hash::make($request->confirm_password)]);
        Auth::logout();
        return response()->json([
            'status' => 'success',
            'message' => 'Successfully password changed. Please login again.',
        ]);
    }

    public function editUser(Request $request)
    {
        $user = Auth::user();
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => ['required', 'string', 'email', 'max:255', Rule::unique('users')->ignore($user->id)],
            'avatar' => 'required'
        ]);

        try {
            $user->name = $request->name;
            $user->email = $request->email;
            $user->phone = $request->phone;
            $user->abouts = $request->abouts;

            if ($request->hasFile("avatar")) {
                $filename = time() . '-' . 'avatar.' . fileInfo($request->avatar)['extension'];
                $path = 'uploads/users';
                fileUpload($request->avatar, $path, $filename);
                $img = $path . '/' . $filename;
                $user->avatar = $img;
            }

            $user->save();

            return response()->json($user);
        } catch (\Throwable $th) {
            return response()->json($th);
        }
    }

}

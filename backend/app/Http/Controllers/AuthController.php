<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        if (!Auth::attempt($request->only('email', 'password'))) {
            return [
                'status' => 500,
                'message' => 'credenciales incorrectas',
            ];
        }
        $user = User::where('email', $request['email'])->firstOrFail();
        $token = $user->createToken('auth_token')->plainTextToken;
        return [
            'status' => 200,
            'access_token' => $token,
            'data' => $user
        ];
    }
    public function logout(Request $request)
    {
        // Revocar el token específico que se está utilizando
        $request->user()->currentAccessToken()->delete();
    
        return response()->json([
            'status' => 200,
            'message' => 'Sesión cerrada exitosamente',
        ]);
    }
    // public function logout()
    // {
    //     auth()->user()->tokens()->delete();
    //     return Resp::responseSuccess([]);
    // }
}

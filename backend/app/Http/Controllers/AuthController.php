<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Auth\Events\Registered;

class AuthController extends Controller
{
    /**
     * Register a new user and send verification email.
     */
    public function register(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:8|confirmed',
        ]);

        // Create new user
        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
        ]);

        // Fire Laravel's built-in registration event
        // Sends verification email automatically
        event(new Registered($user));

        return response()->json([
            'status' => 'success',
            'message' => 'Registration successful. Please check your email to verify your account.',
            'user' => $user
        ], 201);
    }

    /**
     * Login user (only if email is verified).
     */
    public function login(Request $request)
    {
        $validated = $request->validate([
            'email' => 'required|email',
            'password' => 'required|string'
        ]);

        $user = User::where('email', $validated['email'])->first();

        if (!$user || !Hash::check($validated['password'], $user->password)) {
            return response()->json([
                'status' => 'error',
                'message' => 'Invalid credentials.'
            ], 401);
        }

        // Prevent login if email not verified
        if (!$user->hasVerifiedEmail()) {
            return response()->json([
                'status' => 'error',
                'message' => 'Please verify your email before logging in.'
            ], 403);
        }

        // Create Sanctum token
        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'status' => 'success',
            'message' => 'Login successful.',
            'user' => $user,
            'token' => $token
        ], 200);
    }

    /**
     * Logout and revoke all tokens.
     */
    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Logged out successfully.'
        ], 200);
    }
}

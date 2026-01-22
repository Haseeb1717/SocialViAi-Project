<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User; // Example model, you can replace it

class FormController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email',
        ]);

        $user = User::create($validated);

        return response()->json([
            'message' => 'User created successfully!',
            'data' => $user,
        ], 201);
    }
}

<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;

// Health check (optional)
Route::get('/', function () {
    return response()->json(['message' => 'Laravel 12 Backend is running']);
});

// API routes
Route::prefix('api')->group(function () {
    Route::post('/register', [AuthController::class, 'register']);
});

<?php

// use Illuminate\Support\Facades\Route;
// use App\Http\Controllers\AuthController;

// Route::get('/', function () {
//     return view('welcome');
// });

// Route::get('/verify-email/{id}/{hash}', [AuthController::class, 'verifyEmail'])->name('verification.verify');
use Illuminate\Support\Facades\Route;
use App\Models\User;

Route::get('/verify-email/{id}/{hash}', function ($id, $hash) {
    $user = User::findOrFail($id);

    // Check hash
    if (!hash_equals($hash, sha1($user->email))) {
        return response()->json(['status' => 'error', 'message' => 'Invalid or expired link'], 403);
    }

    // Verify user
    if (!$user->hasVerifiedEmail()) {
        $user->markEmailAsVerified();
    }

    return response()->json(['status' => 'success', 'message' => 'Email verified successfully!']);
})->name('verification.verify');

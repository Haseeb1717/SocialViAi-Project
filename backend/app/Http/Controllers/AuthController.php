<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Auth\Events\Registered;

class AuthController extends Controller
{
    // Register user
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:8|confirmed',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        // Trigger email verification
        event(new Registered($user));

        return response()->json([
            'message' => 'User registered successfully. Please check your email for verification.'
        ], 201);
    }
// public function verifyEmail($id, $hash)
// {
//     $user = \App\Models\User::findOrFail($id);

//     if (! hash_equals(sha1($user->getEmailForVerification()), $hash)) {
//         return view('verify-email', [
//             'message' => 'Invalid verification link',
//             'type' => 'error'
//         ]);
//     }

//     if ($user->hasVerifiedEmail()) {
//         return view('verify-email', [
//             'message' => 'Email already verified! You can now log in.',
//             'type' => 'success'
//         ]);
//     }

//     $user->markEmailAsVerified();

//     return view('verify-email', [
//         'message' => 'Email verified successfully! Redirecting...',
//         'type' => 'success',
//     'redirect' => 'https://socialviaiproject-ikwn--5173--31fc58ec.local-credentialless.webcontainer.io/dashboard'

//         ]);
// }



// public function verifyEmail($id, $hash)
// {
//     $user = \App\Models\User::findOrFail($id);

//     if (! hash_equals(sha1($user->getEmailForVerification()), $hash)) {
//         return response()->json(['message' => 'Invalid verification link'], 400);
//     }

//     if ($user->hasVerifiedEmail()) {
//         return redirect('https://socialviaiproject-ikwn--5173--31fc58ec.local-credentialless.webcontainer.io/dashboard');
//     }

//     $user->markEmailAsVerified();

//     return redirect('https://socialviaiproject-ikwn--5173--31fc58ec.local-credentialless.webcontainer.io/dashboard');
// }

public function verifyEmail(Request $request, $id, $hash)
{
    $user = \App\Models\User::findOrFail($id);

    if (! hash_equals((string) $hash, sha1($user->getEmailForVerification()))) {
        abort(403, 'Invalid verification link');
    }

    if (!$user->hasVerifiedEmail()) {
        $user->markEmailAsVerified();
    }

    // Redirect to dashboard with a query param
    return redirect('https://socialviaiproject-ikwn--5173--31fc58ec.local-credentialless.webcontainer.io/dashboard?verified=1');
}


}


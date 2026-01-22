<?php

namespace App\Notifications;

use Illuminate\Auth\Notifications\VerifyEmail as BaseVerifyEmail;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Carbon;

class CustomVerifyEmail extends BaseVerifyEmail
{
    /**
     * Create a verification URL for the user's email.
     */
    protected function verificationUrl($notifiable)
    {
        // Generate the signed backend verification URL
        $temporarySignedURL = URL::temporarySignedRoute(
            'verification.verify',
            Carbon::now()->addMinutes(60),
            [
                'id' => $notifiable->getKey(),
                'hash' => sha1($notifiable->getEmailForVerification())
            ]
        );

        // Frontend base URL (update if you move frontend to Vercel/Netlify)
        $frontendUrl = 'https://socialviai-project-production.up.railway.app';

        // Send the signed URL to frontend route (React handles UI)
        return "{$frontendUrl}/verify-email/{$notifiable->getKey()}/" . sha1($notifiable->getEmailForVerification());
    }
}

<?php

namespace App\Notifications;

use Illuminate\Auth\Notifications\VerifyEmail as BaseVerifyEmail;

class CustomVerifyEmail extends BaseVerifyEmail
{
    /**
     * Generate a custom frontend verification URL.
     */
    protected function verificationUrl($notifiable)
    {
        // Your React frontend base URL (StackBlitz URL)
        $frontendUrl = 'https://socialviai-project-production.up.railway.app/signup';

        // Create a unique hash for verification
        $hash = sha1($notifiable->getEmailForVerification());

        // Return a clean frontend route (React will handle this)
        return "{$frontendUrl}/verify-email/{$notifiable->getKey()}/{$hash}";
    }
}

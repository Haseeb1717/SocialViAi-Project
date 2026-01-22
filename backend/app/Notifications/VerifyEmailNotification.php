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
        $frontendUrl = 'https://socialviaiproject-ikwn--5173--31fc58ec.local-credentialless.webcontainer.io';

        // Create a unique hash for verification
        $hash = sha1($notifiable->getEmailForVerification());

        // Return a clean frontend route (React will handle this)
        return "{$frontendUrl}/verify-email/{$notifiable->getKey()}/{$hash}";
    }
}

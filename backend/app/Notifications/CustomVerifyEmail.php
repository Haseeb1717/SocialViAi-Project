<?php
namespace App\Notifications;

use Illuminate\Auth\Notifications\VerifyEmail as BaseVerifyEmail;


//class CustomVerifyEmail extends BaseVerifyEmail
// {
//     /**
//      * Generate a custom frontend verification URL.
//      */
//     protected function verificationUrl($notifiable)
//     {
//         // Your React frontend base URL (StackBlitz)
//         $frontendUrl = 'https://socialviaiproject-ikwn--5173--31fc58ec.local-credentialless.webcontainer.io';

//         // Create unique hash for verification
//         $hash = sha1($notifiable->getEmailForVerification());

//         // Build the frontend URL (React will fetch backend to verify)
//         return "{$frontendUrl}/verify-email/{$notifiable->getKey()}/{$hash}";
//     }
// }


class CustomVerifyEmail extends BaseVerifyEmail
{
    protected function verificationUrl($notifiable)
    {
        $frontend = 'https://socialviaiproject-ikwn--5173--31fc58ec.local-credentialless.webcontainer.io';
        $hash = sha1($notifiable->getEmailForVerification());

        return "{$frontend}/verify-email/{$notifiable->getKey()}/{$hash}";
    }
}

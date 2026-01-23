<?php

namespace App\Notifications;

use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\URL;

class CustomVerifyEmail extends VerifyEmail
{
    /**
     * Build the mail representation of the notification.
     */
    public function toMail($notifiable)
    {
        // Generate a signed URL valid for 60 minutes
        $verificationUrl = $this->verificationUrl($notifiable);

        return (new MailMessage)
            ->subject('Verify Your Email Address - SocialVi AI')
            ->greeting('Hello ' . $notifiable->name . ',')
            ->line('Thank you for signing up for SocialVi AI!')
            ->line('Please click the button below to verify your email address and activate your account.')
            ->action('Verify Email', $verificationUrl)
            ->line('If you did not create an account, please ignore this email.');
    }

    /**
     * Create a temporary signed verification URL.
     */
    protected function verificationUrl($notifiable)
    {
        return URL::temporarySignedRoute(
            'verification.verify', // name from routes/api.php
            Carbon::now()->addMinutes(Config::get('auth.verification.expire', 60)),
            [
                'id'   => $notifiable->getKey(),
                'hash' => sha1($notifiable->getEmailForVerification()),
            ]
        );
    }
}

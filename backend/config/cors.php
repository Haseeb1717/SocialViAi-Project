<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Cross-Origin Resource Sharing (CORS) Settings
    |--------------------------------------------------------------------------
    */

    'paths' => ['api/*', 'verify-email/*', 'sanctum/csrf-cookie'],

    'allowed_methods' => ['*'],

    'allowed_origins' => [
        'https://socialviai-project-production.up.railway.app', // your live backend
        'https://socialviai-project-production.up.railway.app/', // safety for trailing slash
        'https://socialvi-ai-frontend.vercel.app', // if you later deploy React on Vercel or Netlify
        'http://localhost:3000', // for local testing
    ],

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['*'],

    'exposed_headers' => ['Authorization'],

    'max_age' => 0,

    'supports_credentials' => true,
];

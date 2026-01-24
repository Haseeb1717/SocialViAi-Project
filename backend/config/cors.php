<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Cross-Origin Resource Sharing (CORS) Settings
    |--------------------------------------------------------------------------
    */

    // Include both API routes and the default verification route
    'paths' => [
        'api/*',
        'email/verify/*',
        'sanctum/csrf-cookie',
    ],

    // Allow all HTTP methods (GET, POST, PUT, DELETE, OPTIONS)
    'allowed_methods' => ['*'],

    // List all frontend origins that will call your API
    'allowed_origins' => [
        'https://socialviai-project-production.up.railway.app', // Your production frontend
        'http://localhost:3000', // For local React testing
    ],

    'allowed_origins_patterns' => [],

    // Allow all headers from frontend requests
    'allowed_headers' => ['*'],

    // Expose the Authorization header so React can read tokens
    'exposed_headers' => ['Authorization'],

    // Keep preflight cache short for development; you can increase later
    'max_age' => 0,

    // Enable cookies and credentials for Sanctum authentication
    'supports_credentials' => true,
];

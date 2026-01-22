<?php
// return [

//     /*
//     |--------------------------------------------------------------------------
//     | Cross-Origin Resource Sharing (CORS) Settings
//     |--------------------------------------------------------------------------
//     */

//     'paths' => ['api/*', 'sanctum/csrf-cookie'],

//     'allowed_methods' => ['*'], // You can restrict to ['GET','POST','PUT','DELETE'] in production

//     'allowed_origins' => [
//         'https://socialviaiproject-ikwn--5173--31fc58ec.local-credentialless.webcontainer.io'    // React local
       
//     ],

//     'allowed_origins_patterns' => [],

//     'allowed_headers' => ['*'], // Allow all headers (Accept, Authorization, Content-Type)

//     'exposed_headers' => ['Authorization'],

//     'max_age' => 0,

//     'supports_credentials' => true, // MUST be true if you use Sanctum and cookies
// ];
return [
    'paths' => ['api/*', 'verify-email/*'],

'allowed_origins' => [
    'https://socialviaiproject-ikwn--5173--31fc58ec.local-credentialless.webcontainer.io',
    'https://noninfusible-socialistic-tuyet.ngrok-free.dev',
],

'allowed_methods' => ['*'],
'allowed_headers' => ['*'],
'supports_credentials' => true,

];

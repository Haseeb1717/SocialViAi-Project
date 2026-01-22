<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\FormController;

Route::post('/register', [FormController::class, 'store']);

<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Throwable;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Validation\ValidationException;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array<int, class-string<Throwable>>
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     */
    public function register(): void
    {
        //
    }

    /**
     * Render an exception into an HTTP response.
     */
    public function render($request, Throwable $exception)
    {
        // If the request is for API, return JSON
        if ($request->is('api/*')) {

            // Validation errors
            if ($exception instanceof ValidationException) {
                return response()->json([
                    'message' => 'Validation failed',
                    'errors' => $exception->errors(),
                ], 422);
            }

            // Authentication errors
            if ($exception instanceof AuthenticationException) {
                return response()->json([
                    'message' => 'Unauthenticated',
                ], 401);
            }

            // All other errors
            return response()->json([
                'message' => $exception->getMessage() ?: 'Server Error',
                'code' => $exception->getCode() ?: 500
            ], method_exists($exception, 'getStatusCode') ? $exception->getStatusCode() : 500);
        }

        // For normal web routes, keep default behavior
        return parent::render($request, $exception);
    }
}

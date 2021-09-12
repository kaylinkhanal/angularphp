<?php

use App\Http\Controllers\Api\CourseApiController;
use Illuminate\Support\Facades\Route;

Route::apiResource('courses', CourseApiController::class);

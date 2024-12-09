<?php
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\ActivityController;

Route::resource('/projects', ProjectController::class)->middleware('auth');
Route::resource('/activities', ActivityController::class)->middleware('auth');
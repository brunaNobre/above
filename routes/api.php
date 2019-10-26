<?php

use Illuminate\Http\Request;
use App\Chart;
use App\Mood;
use App\Moon;
use App\Planet;
use App\Sign;
use App\Task;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// middleware('auth:api')->

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/planets', function () {

    $planets = Planet::all();
    return $planets;
});


Route::get('/moons', function () {

    $moons = Moon::all();
    return $moons;
});


Route::get('/signs', function () {

    $signs = Sign::all();
    return $signs;
});

// TASKS

Route::get('/tasks', function () {

    $tasks = Task::all();
    return $tasks;
});

Route::put('tasks/{id}', function(Request $request, $id) {
    $tasks = Task::findOrFail($id);
    $tasks->update($request->all());

    return $tasks;
});


Route::post('/tasks', function(Request $request) {


    return $request->user_id;

});




Route::middleware('auth:api')->get('/charts', function () {

    $charts = Chart::all();
    return $charts;
});

Route::middleware('auth:api')->get('/moods', function () {

    $moods = Mood::all();
    return $moods;
});
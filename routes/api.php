<?php

use Illuminate\Http\Request;
use App\Chart;
use App\Mood;
use App\Moon;
use App\Planet;
use App\Sign;
use App\Task;
use App\User;
use App\Feelling;
use App\FeellingMood;


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
    return auth()->user();
});

Route::middleware('auth:api')->get('/planets', function () {

    $planets = Planet::all();
    return $planets;
});


Route::middleware('auth:api')->get('/moons', function () {

    $moons = Moon::all();
    return $moons;
});


Route::middleware('auth:api')->get('/signs', function () {

    $signs = Sign::all();
    return $signs;
});

// TASKS

Route::middleware('auth:api')->get('/tasks', function () {
    $tasks = Task::all();
    return $tasks;
});


Route::middleware('auth:api')->put('tasks/{id}', function(Request $request, $id) {
    $tasks = Task::findOrFail($id);
    $tasks->update($request->all());
    return $tasks;
});


Route::middleware('auth:api')->post('/tasks', function(Request $request) {
    return Task::create($request->all());
});

Route::middleware('auth:api')->delete('tasks/{id}', function($id) {
    Task::find($id)->delete();
    return 204;
});


// CHARTS

Route::middleware('auth:api')->get('/charts', function () {

    $charts = Chart::all();
    return $charts;
});

// MOODS

Route::post('/moods', function(Request $request) {
     Mood::create($request->all());
     $mood = Mood::all()->last();
     return $mood->feellings()->attach([1]);
     
});

Route::middleware('auth:api')->get('/day-feellings', function() {
    $user_id = auth()->user()->id;
    $moods = Mood::where('user_id', $user_id)
    ->where('day', '2019-10-31')
    ->get();

    foreach ($moods as $mood) {
        $feellings = $mood->feellings()->get();
    }

    
    return $feellings;            
    
});

Route::middleware('auth:api')->get('/user-feellings', function() {

    $user_id = auth()->user()->id;
    $moods = Mood::where('user_id', $user_id)->get();
    $feellingsList = array();
    $feellings = array();

    foreach ($moods as $mood) {
        array_push($feellingsList, $mood->feellings()->get());
    }

    foreach ($feellingsList as $feeling) {
        foreach($feeling as $f) {
            array_push($feellings, $f);
        }
    }

return $feellings;

    
});


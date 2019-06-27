<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});



Route::get('/places', function () {
    return view('places');
});

Auth::routes();

Route::get('/admin', 'HomeController@index');


Route::get('/redirect', 'Auth\LoginController@redirectToProvider')->name('redirect');
Route::get('/callback', 'Auth\LoginController@handleProviderCallback');


Route::get('/home', 'HomeController@index')->name('home');

Route::resource('moods', 'MoodController');

Route::resource('moons', 'MoonController');

Route::resource('planets', 'PlanetController');

Route::resource('signs', 'SignController');

Route::resource('tasks', 'TaskController');

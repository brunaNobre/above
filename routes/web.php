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

Route::get('/admin', 'HomeController@index')->name('admin');;


Route::get('/redirect', 'Auth\LoginController@redirectToProvider')->name('redirect');
Route::get('/callback', 'Auth\LoginController@handleProviderCallback');



//Route::resource('moods', 'MoodController');

Route::resource('admin/moons', 'MoonController');

Route::resource('admin/planets', 'PlanetController');

Route::resource('admin/signs', 'SignController');

//Route::resource('tasks', 'TaskController');

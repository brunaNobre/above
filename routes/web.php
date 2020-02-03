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

//Route::post('userlogout', 'Auth\LoginController@logout')->name('userlogout');


Route::get('/admin', 'AdminController@index')->name('admin.dashboard');



//Route::get('admin/register', 'AdminController@create')->name('admin.register');
//Route::post('admin/register', 'AdminController@store')->name('admin.register.store');
Route::get('admin/login', 'Auth\Admin\LoginController@login')->name('admin.auth.login');
Route::post('admin/login', 'Auth\Admin\LoginController@loginAdmin')->name('admin.auth.loginAdmin');
Route::post('admin/logout', 'Auth\Admin\LoginController@logout')->name('admin.auth.logout');


Route::resource('admin/moons', 'MoonController');

Route::post('admin/moon-upload', 'MoonController@image')->name('admin.moon.image');

Route::resource('admin/planets', 'PlanetController');

Route::post('admin/planet-upload', 'PlanetController@image')->name('admin.planet.image');

Route::resource('admin/signs', 'SignController');

Route::post('admin/sign-upload', 'SignController@image')->name('admin.sign.image');

Route::resource('admin/users', 'UserController');

Route::resource('admin/advices', 'AdviceController');

Route::resource('admin/feellings', 'FeellingController');

Route::get('/home', 'HomeController@index')->name('home');

Route::view('/home/{path?}', 'home')->middleware('auth');





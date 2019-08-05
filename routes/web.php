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


//Route::get('/redirect', 'Auth\LoginController@redirectToProvider')->name('redirect');
//Route::get('/callback', 'Auth\LoginController@handleProviderCallback');


Route::get('/home', 'HomeController@index')->name('home');

Route::get('/admin', 'AdminController@index')->name('admin.dashboard');



Route::get('admin/register', 'AdminController@create')->name('admin.register');
Route::post('admin/register', 'AdminController@store')->name('admin.register.store');
Route::get('admin/login', 'Auth\Admin\LoginController@login')->name('admin.auth.login');
Route::post('admin/login', 'Auth\Admin\LoginController@loginAdmin')->name('admin.auth.loginAdmin');
Route::post('admin/logout', 'Auth\Admin\LoginController@logout')->name('admin.auth.logout');


Route::resource('admin/moons', 'MoonController');

Route::resource('admin/planets', 'PlanetController');

Route::resource('admin/signs', 'SignController');

Route::resource('admin/users', 'UserController');

Route::resource('admin/advices', 'AdviceController');




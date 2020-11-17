<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|


Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::view('/', 'welcome');
*/

//Route::redirect('/', '/login');
Route::redirect('/dashboard', '/admin/dashboard');

Auth::routes(['register' => true]);

Route::group([
    'prefix'     => 'admin',
    'as'         => 'admin.',
    'namespace'  => 'Admin',
    'middleware' => ['auth'],
], function () {
    Route::view('/{any?}', 'layouts.admin.app')->name('dashboard')->where('any', '.*');
});


// Our NEW group - for front-end users
Route::group([
    'prefix' => 'user', 
    'as' => 'user.', 
    'namespace' => 'User', 
    'middleware' => ['auth']
], function () {
    Route::get('/', 'HomeController@index')->name('dashboard');
});	

//Route::view('/', 'welcome');
Route::view('/{any}', 'welcome')->name('userwelcome')->where('any', '.*');
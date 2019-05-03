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






// Standard Hello World
Route::get('/', function () {
    return 'Hello, World!';
});

// Generate 1 million item array
Route::get('/array_1m', function () {
    $array = array();

    for ($i = 0; $i < 1000000; $i++) {
        $array[] = $i;
    }

    return $i;
});

// Generate 1 million item array with concatenate
Route::get('/array_1m_concat', function () {
    $array = array();

    for ($i = 0; $i < 1000000; $i++) {
        $array[] = 'Current: ' . $i;
    }

    return $i;
});

// Generate 1 million item array with sum
Route::get('/array_1m_sum', function () {
    $array = array();
    $sum = 0;

    for ($i = 0; $i < 1000000; $i++) {
        $sum += $i;
        $array[] = $sum;
    }

    return $i;
});

// Generate 1 million item array reduce
Route::get('/array_1m_reduce', function () {
    $array = array();

    for ($i = 0; $i < 1000000; $i++) {
        $array[] = $i;
    }

    return array_reduce($array, function ($sum, $value) { return $sum + $value; });
});
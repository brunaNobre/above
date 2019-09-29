<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Advice;
use Faker\Generator as Faker;

$factory->define(Advice::class, function (Faker $faker) {
    return [
        'moon' => $faker->word,
        'sign' => $faker->word,
        'advice' => $faker->paragraph
    ];
});

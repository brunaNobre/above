<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateChartsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('charts', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('user_id');
            $table->string('sun');
            $table->string('rising_sign');
            $table->string('moon');
            $table->string('mercury');
            $table->string('venus');
            $table->string('mars');
            $table->string('jupiter');
            $table->string('saturn');
            $table->string('uranus');
            $table->string('neptune');
            $table->string('pluto');
            $table->string('mc');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('charts');
    }
}

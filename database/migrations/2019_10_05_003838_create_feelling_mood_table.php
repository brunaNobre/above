<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFeellingMoodTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('feelling_mood', function (Blueprint $table) {
            $table->integer('feelling_id')->unsigned();

            $table->integer('mood_id')->unsigned();
        
            $table->foreign('feelling_id')->references('id')->on('feellings')->onDelete('cascade');
        
                
        
            $table->foreign('mood_id')->references('id')->on('moods')->onDelete('cascade');
        
                  
            $table->index(['feelling_id', 'mood_id'])->unique();
   
            
    });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('feelling_mood');
    }
}

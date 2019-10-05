<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Feelling extends Model
{
    protected $fillable = ['name'];


    public function moods()
    {
        return $this->belongsToMany(Mood::class, 'feelling_mood');
    }

    

}

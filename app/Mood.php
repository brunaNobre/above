<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Mood extends Model
{
    protected $fillable = ['day', 'moon_phase', 'moon_sign'];
    

   
    
    public function user() {
        return $this->belongsTo('App\User');
    }

    public function feellings()
    {
        return $this->belongsToMany(Feelling::class, 'feelling_mood');
    }
}

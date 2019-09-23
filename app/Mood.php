<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Mood extends Model
{
    protected $fillable = ['user_id', 'day', 'moon_phase', 'moon_sign'];
    
    public function user() {
        return $this->belongsTo('App\User');
    }
   
    
}

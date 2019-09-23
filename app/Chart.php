<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Chart extends Model
{
    protected $fillable = [
        'userId', 'sun', 'rising_sign', 'moon', 'mercury', 'venus', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto', 'mc'
    ];
    
    public function user() {
        return $this->belongsTo('App\User');
    }
}

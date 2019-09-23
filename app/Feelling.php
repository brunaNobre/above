<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Feelling extends Model
{
    protected $fillable = ['moodId', 'name'];

    public function mood() {
        return $this->belongsTo('App\Mood');
    }

}

<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $fillable = ['title', 'details', 'due_to', 'is_completed'];
    
    public function user() {
        return $this->belongsTo('App\User');
    }
   
}

<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Moon extends Model
{
      /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['phase', 'description'];
}

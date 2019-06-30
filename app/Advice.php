<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Advice extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['moon', 'sign', 'advice'];

}

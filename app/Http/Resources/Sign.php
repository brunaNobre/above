<?php

namespace App\Http\Resources;
namespace App\Sign;

use Illuminate\Http\Resources\Json\JsonResource;

class Sign extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function index()
    {
        $signs = Sign::all();
        return $signs;
    }
}

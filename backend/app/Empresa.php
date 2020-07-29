<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Empresa extends Model
{
    protected $guarded = [];

    public function funcionarios()
    {
        return $this->belongsToMany(Funcionario::class)->withTimestamps();
    }
}

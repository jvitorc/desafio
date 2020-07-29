<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Funcionario extends Model
{
    protected $guarded = [];
    public function empresas()
    {
        return $this->belongsToMany(Empresa::class);
    }
}

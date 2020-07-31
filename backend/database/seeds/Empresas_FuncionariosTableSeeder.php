<?php

use App\Empresa;
use App\Funcionario;
use Illuminate\Database\Seeder;

class Empresas_FuncionariosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $funcionarios = Funcionario::all();

        Empresa::all()->each(function ($empresa) use ($funcionarios) {
            $empresa->funcionarios()->attach(random_int(0,$funcionarios->count()));
            $empresa->funcionarios()->attach(random_int(0,$funcionarios->count()));
        });

    }
}

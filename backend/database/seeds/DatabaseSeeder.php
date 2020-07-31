<?php

use App\Funcionario;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UserSeeder::class);
        $this->call(EmpresasTableSeeder::class);
        $this->call(FuncionariosTableSeeder::class);
        $this->call(Empresas_FuncionariosTableSeeder::class);
    }
}

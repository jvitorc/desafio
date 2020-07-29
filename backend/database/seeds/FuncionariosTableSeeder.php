<?php

use App\Funcionario;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;


class FuncionariosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $faker = \Faker\Factory::create();

        for ($i = 0; $i < 10; $i++) {
            Funcionario::create([
                'nome' => $faker->name,
                'login' => $faker->userName,
                'senha' => $faker->password,
                'endereco' => $faker->address,
                'cpf' => Str::random(11),
                'email' => $faker->email
            ]);
        }
    }
}

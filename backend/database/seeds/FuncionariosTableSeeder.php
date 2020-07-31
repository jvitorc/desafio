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

        for ($i = 0; $i < 5; $i++) {
            $cpf = random_int(0,99999999999);

            Funcionario::create([
                'nome' => $faker->name,
                'login' => $faker->userName,
                'senha' => $faker->password,
                'endereco' => $faker->address,
                'cpf' => $cpf,
                'email' => $faker->email
            ]);
        }
    }
}

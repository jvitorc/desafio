<?php

use Illuminate\Database\Seeder;
use App\Empresa;
use Illuminate\Support\Str;

class EmpresasTableSeeder extends Seeder
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
            $cnpj = random_int(0,99999999999999);

            Empresa::create([
                'nome' => $faker->name,
                'endereco' => $faker->address,
                'cnpj' => strval($cnpj)
            ]);
        }
    }
}

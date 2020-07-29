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
            Empresa::create([
                'nome' => $faker->name,
                'endereco' => $faker->address,
                'cnpj' => Str::random(14)
            ]);
        }
    }
}

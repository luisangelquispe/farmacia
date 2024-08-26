<?php

namespace Database\Seeders;

use App\Models\Marca;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MarcasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Marca::create([
            "name" => "Marca Uno",
        ]);
        Marca::create([
            "name" => "Marca Dos",
        ]);
        Marca::create([
            "name" => "Marca Tres",
        ]);
        Marca::create([
            "name" => "Marca Cuatro",
        ]);
    }
}

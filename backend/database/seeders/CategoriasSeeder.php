<?php

namespace Database\Seeders;

use App\Models\Categoria;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategoriasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Categoria::create([
            "name" => "Categoria Uno",
        ]);
        Categoria::create([
            "name" => "Categoria Dos",
        ]);
        Categoria::create([
            "name" => "Categoria Tres",
        ]);
        Categoria::create([
            "name" => "Categoria Cuatro",
        ]);
    }
}

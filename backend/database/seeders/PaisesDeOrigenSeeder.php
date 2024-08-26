<?php

namespace Database\Seeders;

use App\Models\Pais_origen;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PaisesDeOrigenSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Pais_origen::create([
            "name" => "Bolivia",
        ]);
        Pais_origen::create([
            "name" => "Brasil",
        ]);
        Pais_origen::create([
            "name" => "Argentina",
        ]);
        Pais_origen::create([
            "name" => "India",
        ]);
        Pais_origen::create([
            "name" => "Alemania",
        ]);
    }
}

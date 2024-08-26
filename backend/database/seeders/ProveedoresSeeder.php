<?php

namespace Database\Seeders;

use App\Models\Proveedores;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProveedoresSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        Proveedores::create([
            "name" => "Distribuidor Uno",
            "phone" => "73482942",
        ]);
        Proveedores::create([
            "name" => "Distribuidor Dos",
            "phone" => "78394658",
        ]);
        Proveedores::create([
            "name" => "Distribuidor Tres",
            "phone" => "7849305",
        ]);
        Proveedores::create([
            "name" => "Distribuidor Cuatro",
            "phone" => "7840384",
        ]);
    }
}

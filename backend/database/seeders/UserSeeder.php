<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {        
        User::create([
            "name" => "Luis Angel",
            "lastname" => "Quispe Abendaño",
            "email" => "admin",
            "phone" => "75335405",            
            "password" => Hash::make("admin")
        ]);
    }
}

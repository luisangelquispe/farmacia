<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('permissions_users', function (Blueprint $table) {
            $table->id();
            $table->bigInteger("id_user")->unsigned();
            $table->bigInteger("id_permission")->unsigned();


            $table->foreign("id_user")->references("id")->on("users")->onUpdate("cascade");
            $table->foreign("id_permission")->references("id")->on("permisos")->onUpdate("cascade");

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('permissions_users');
    }
};

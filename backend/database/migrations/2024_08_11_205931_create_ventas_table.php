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
        Schema::create('ventas', function (Blueprint $table) {
            $table->id();
            // Código de recibo con valor inicial 2000000
            $table->unsignedBigInteger('cod_recibo')->default(2000000);
            $table->bigInteger('id_user')->unsigned();
            $table->date('fecha_venta');
            
            $table->foreign("id_user")->references("id")->on("users")->onUpdate("cascade");
            $table->timestamps();  // Campos 'created_at' y 'updated_at'
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ventas');
    }
};

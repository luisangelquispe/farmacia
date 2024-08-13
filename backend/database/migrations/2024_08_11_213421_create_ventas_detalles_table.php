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
        Schema::create('ventas_detalles', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('id_venta')->unsigned();
            $table->bigInteger('id_producto')->unsigned();
            $table->decimal('monto', 10, 2);
            $table->integer('cantidad');

            $table->foreign("id_venta")->references("id")->on("ventas")->onUpdate("cascade");
            $table->foreign("id_producto")->references("id")->on("productos")->onUpdate("cascade");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ventas_detalles');
    }
};

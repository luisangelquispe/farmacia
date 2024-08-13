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
        Schema::create('productos', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('cod_producto');
            $table->decimal('precio_compra', 10, 2);
            $table->decimal('precio_venta', 10, 2);
            $table->decimal('precio_competencia', 10, 2);            
            $table->bigInteger("id_proveedor")->unsigned();
            $table->bigInteger("id_categoria")->unsigned();
            $table->bigInteger("id_marca")->unsigned();
            $table->bigInteger("id_pais_origen")->unsigned();

            $table->foreign("id_proveedor")->references("id")->on("proveedores")->onUpdate("cascade");
            $table->foreign("id_categoria")->references("id")->on("categorias")->onUpdate("cascade");
            $table->foreign("id_marca")->references("id")->on("marcas")->onUpdate("cascade");
            $table->foreign("id_pais_origen")->references("id")->on("pais_origens")->onUpdate("cascade");


            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('productos');
    }
};

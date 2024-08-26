<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Productos extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'cod_producto',
        'precio_compra',
        'precio_venta',
        'precio_competencia',
        'id_proveedor',
        'id_categoria',
        'id_marca',
        'id_pais_origen',
    ];

    protected $casts = [
        'name' => 'string',
        'cod_producto' => 'string',
        'precio_compra' => 'float',
        'precio_venta' => 'float',
        'precio_competencia' => 'float',
        'id_proveedor' => 'integer',
        'id_categoria' => 'integer',
        'id_marca' => 'integer',
        'id_pais_origen' => 'integer',
    ];
}

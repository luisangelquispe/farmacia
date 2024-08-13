<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class productos extends Model
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
}

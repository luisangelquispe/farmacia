<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ventas_detalle extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_venta',
        'id_producto',
        'monto',
        'cantidad',
    ];

    protected $casts = [
        'id_venta' => 'integer',
        'id_producto' => 'integer',        
        'monto' => 'float',
        'cantidad' => 'integer'
    ];
}

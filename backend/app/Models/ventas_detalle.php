<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ventas_detalle extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_venta',
        'id_producto',
        'monto',
        'cantidad',
    ];
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Productos_lotes extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_producto',
        'stock',
        'cantidad_inicial',
        'fecha_vencimiento'
    ];

    protected $casts = [
        'id_producto' => 'integer',
        'stock' => 'integer',
        'cantidad_inicial' => 'integer',
        'fecha_vencimiento' => 'date'
    ];
}   

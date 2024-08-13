<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class productos_lotes extends Model
{
    use HasFactory;

    protected $fillable = [        
        'id_producto',        
        'stock',        
        'cantidad_inicial',        
        'fecha_vencimiento'        
    ];
}

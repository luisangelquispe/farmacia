<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ventas extends Model
{
    use HasFactory;

    protected $fillable = [
        'cod_recibo',
        'fecha_venta',
        'id_user',
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            // Obtener el valor máximo de cod_recibo actual
            $latestRecibo = static::max('cod_recibo') ?? 1999999;
            // Incrementar en 1
            $model->cod_recibo = $latestRecibo + 1;
        });
    }
}

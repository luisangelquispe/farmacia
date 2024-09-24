<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class VentasDetalleController extends Controller
{
    //

    public function index()
    {
        // select pl.id, pl.id_producto, p.name, pl.stock,
        // pl.fecha_vencimiento, 
        // DATEDIFF(now(), pl.fecha_vencimiento) AS dias_diferencia
        // from productos_lotes pl
        // left join productos p on p.id = pl.id_producto
        // where pl.fecha_vencimiento <= now();
        $ventas = DB::table('productos_lotes as pl')
            ->select(
                'pl.id',
                'pl.id_producto',
                'p.name',
                'pl.stock',
                'pl.fecha_vencimiento',
                DB::raw('DATEDIFF(now(), pl.fecha_vencimiento) AS dias_diferencia')
            )
            ->leftJoin('productos as p', 'p.id', '=', 'pl.id_producto')
            ->where('pl.fecha_vencimiento', '<=', now())
            ->get();

        return $ventas;
    }
}

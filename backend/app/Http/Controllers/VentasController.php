<?php

namespace App\Http\Controllers;

use App\Models\Ventas;
use App\Models\Ventas_detalle;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class VentasController extends Controller
{
    //

    public function store(Request $request)
    {
        // $producto = Productos::create($request->all());
        $user_id = auth()->user()->id;

        $venta = Ventas::create([
            'fecha_venta' => now()->toDateString(),
            'id_user' => $user_id
        ]);


        foreach ($request->productos as $producto) {
            Ventas_detalle::create([
                'id_venta' => $venta->id,
                'id_producto' => $producto['id'],
                'monto' => $producto['monto'],
                'cantidad' => $producto['cantidad']
            ]);
        }



        // select

        $venta_resp = DB::table('ventas as v')
            ->select(
                'v.id',
                'v.cod_recibo',
                'v.id_user',
                'u.name',
                'v.fecha_venta',
            )
            ->leftJoin('users as u', 'u.id', '=', 'v.id_user')
            ->where("v.id", $venta->id)
            ->first();

        // select vd.id, vd.id_venta, vd.id_producto, p.name as producto,
        // vd.monto, vd.cantidad from ventas_detalles vd 
        // left join productos p on p.id = vd.id_producto
        // where vd.id_venta = 4;
        $ventaDetalle = DB::table('ventas_detalles as vd')
            ->select(
                'vd.id',
                'vd.id_venta',
                'vd.id_producto',
                'p.name as producto',
                'vd.monto',
                'vd.cantidad'
            )
            ->leftJoin('productos as p', 'p.id', '=', 'vd.id_producto')
            ->where('vd.id_venta', $venta->id)
            ->get();


        $venta_resp->detalles = $ventaDetalle;

        return $venta_resp;
    }

    public function index()
    {
        // select v.id, v.cod_recibo, v.id_user,
        // u.name, v.fecha_venta from ventas v
        // left join users u on u.id = v.id_user;        
        $ventas = DB::table('ventas as v')
            ->select(
                'v.id',
                'v.cod_recibo',
                'v.id_user',
                'u.name',
                'v.fecha_venta',
            )
            ->leftJoin('users as u', 'u.id', '=', 'v.id_user')
            ->where('v.fecha_venta',  today())
            ->get();

        foreach ($ventas as $venta) {
            // select vd.id, vd.id_venta, vd.id_producto, p.name as producto,
            // vd.monto, vd.cantidad from ventas_detalles vd 
            // left join productos p on p.id = vd.id_producto
            // where vd.id_venta = 4;
            $ventaDetalle = DB::table('ventas_detalles as vd')
                ->select(
                    'vd.id',
                    'vd.id_venta',
                    'vd.id_producto',
                    'p.name as producto',
                    'vd.monto',
                    'vd.cantidad'
                )
                ->leftJoin('productos as p', 'p.id', '=', 'vd.id_producto')
                ->where('vd.id_venta', $venta->id)
                ->get();

            // Agregar los lotes al objeto producto
            $venta->detalles = $ventaDetalle;
        }

        return $ventas;
    }


    public function getRptVentas(Request $request)
    {
        // select v.id, v.cod_recibo, v.id_user, u.name as user_name, v.fecha_venta,
        // vd.id_producto, p.cod_producto, p.name producto_name, vd.cantidad, vd.monto from ventas v
        // left join ventas_detalles vd on vd.id_venta = v.id
        // left join productos p on p.id = vd.id_producto
        // left join users u on u.id = v.id_user 
        // where v.fecha_venta = $request['fecha'];
        $ventas = DB::table('ventas as v')
            ->select(
                'v.id',
                'v.cod_recibo',
                'v.id_user',
                'u.name as user_name',  
                'v.fecha_venta',
                'vd.id_producto',
                'p.cod_producto',
                'p.name as producto_name', 
                'vd.cantidad',
                'vd.monto'
            )
            ->leftJoin('ventas_detalles as vd', 'vd.id_venta', '=', 'v.id')
            ->leftJoin('productos as p', 'p.id', '=', 'vd.id_producto')
            ->leftJoin('users as u', 'u.id', '=', 'v.id_user')
            ->where('v.fecha_venta', $request['fecha'])
            ->get();
    
        return $ventas;
    }
    
}

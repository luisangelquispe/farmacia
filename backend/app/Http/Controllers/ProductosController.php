<?php

namespace App\Http\Controllers;

use App\Models\Productos;
use App\Models\Productos_lotes;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductosController extends Controller
{
    //


    public function index()
    {

        // SELECT p.id, p.name as producto, p.cod_producto,
        // prov.name as proovedor, c.name as categoria, m.name as marca, po.name as pais_origen,
        // p.precio_compra, p.precio_venta, p.precio_competencia
        // FROM productos p
        // left join proveedores prov on prov.id = p.id_proveedor
        // left join categorias c on c.id = p.id_categoria
        // left join marcas m on m.id = p.id_marca
        // left join pais_origens po on po.id = p.id_pais_origen
        // ORDER BY p.id;        


        $productos = DB::table('productos as p')
            ->select(
                'p.id',
                'p.name as producto',
                'p.cod_producto',
                'prov.name as proveedor',
                'c.name as categoria',
                'm.name as marca',
                'po.name as pais_origen',
                'p.precio_compra',
                'p.precio_venta',
                'p.precio_competencia'
            )
            ->leftJoin('proveedores as prov', 'prov.id', '=', 'p.id_proveedor')
            ->leftJoin('categorias as c', 'c.id', '=', 'p.id_categoria')
            ->leftJoin('marcas as m', 'm.id', '=', 'p.id_marca')
            ->leftJoin('pais_origens as po', 'po.id', '=', 'p.id_pais_origen')
            ->orderBy('p.id')
            ->get();

        // Iterar sobre cada producto para agregarle los lotes
        foreach ($productos as $producto) {
            // Obtener los lotes relacionados con el producto
            $lotes = Productos_lotes::where('id_producto', $producto->id)->get();

            // Agregar los lotes al objeto producto
            $producto->lotes = $lotes;
        }

        // Retornar el array de productos con sus lotes
        return $productos;
    }


        public function store(Request $request)
        {
            // $producto = Productos::create($request->all());

            $producto = Productos::create([
                'name' => $request->name,
                'cod_producto' => $request->cod_producto,
                'precio_compra' => $request->precio_compra,
                'precio_venta' => $request->precio_venta,
                'precio_competencia' => $request->precio_competencia,
                'id_proveedor' => $request->id_proveedor,
                'id_categoria' => $request->id_categoria,
                'id_marca' => $request->id_marca,
                'id_pais_origen' => $request->id_pais_origen
            ]);

            $producto_lotes = Productos_lotes::create([
                'id_producto' => $producto->id,
                'stock' => $request->stock,
                'cantidad_inicial' => $request->cantidad_inicial,
                'fecha_vencimiento' => $request->fecha_vencimiento
            ]);


            $producto_resp = DB::table('productos as p')
                ->select(
                    'p.id',
                    'p.name as producto',
                    'p.cod_producto',
                    'prov.name as proveedor',
                    'c.name as categoria',
                    'm.name as marca',
                    'po.name as pais_origen',
                    'p.precio_compra',
                    'p.precio_venta',
                    'p.precio_competencia'
                )
                ->leftJoin('proveedores as prov', 'prov.id', '=', 'p.id_proveedor')
                ->leftJoin('categorias as c', 'c.id', '=', 'p.id_categoria')
                ->leftJoin('marcas as m', 'm.id', '=', 'p.id_marca')
                ->leftJoin('pais_origens as po', 'po.id', '=', 'p.id_pais_origen')
                ->where('p.id', $producto->id)
                ->first(); // Obtén el primer registro como objeto

            // $producto->lotes = $lotes;
            $producto_resp->lotes = [$producto_lotes];




            return $producto_resp;
        }
    }

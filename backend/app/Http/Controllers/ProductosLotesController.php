<?php

namespace App\Http\Controllers;

use App\Models\Productos_lotes;
use Illuminate\Http\Request;

class ProductosLotesController extends Controller
{
    //

    public function store(Request $request)
    {        
        $productos_lote = Productos_lotes::create($request->all());

        return $productos_lote;        
    }
}

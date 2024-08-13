<?php

namespace App\Http\Controllers;

use App\Models\Proveedores;
use Illuminate\Http\Request;

class ProveedoresController extends Controller
{
    //


    public function index()
    {

        return Proveedores::all();
    }


    public function store(Request $request)
    {
        $proveedor = Proveedores::create($request->all());

        return $proveedor;
    }


    public function update(Request $request, Proveedores $_proveedor)
    {

        $_proveedor->fill($request->all());
        $_proveedor->save();

        return $_proveedor;
    }
}

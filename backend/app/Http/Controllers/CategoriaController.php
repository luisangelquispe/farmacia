<?php

namespace App\Http\Controllers;

use App\Models\Categoria;
use Illuminate\Http\Request;

class CategoriaController extends Controller
{
    //

    public function index()
    {

        return Categoria::all();
    }


    public function store(Request $request)
    {
        $categoria = Categoria::create($request->all());

        return $categoria;
    }


    public function update(Request $request, Categoria $_categoria)
    {

        $_categoria->fill($request->all());
        $_categoria->save();

        return $_categoria;
    }
}

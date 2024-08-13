<?php

namespace App\Http\Controllers;

use App\Models\Marca;
use Illuminate\Http\Request;

class MarcaController extends Controller
{
    //

    public function index()
    {

        return Marca::all();
    }


    public function store(Request $request)
    {
        $marca = Marca::create($request->all());

        return $marca;
    }


    public function update(Request $request, Marca $_marca)
    {

        $_marca->fill($request->all());
        $_marca->save();

        return $_marca;
    }
}

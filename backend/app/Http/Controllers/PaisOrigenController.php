<?php

namespace App\Http\Controllers;

use App\Models\Pais_origen;
use Illuminate\Http\Request;

class PaisOrigenController extends Controller
{
    //

    public function index()
    {

        return Pais_origen::all();
    }


    public function store(Request $request)
    {
        $pais_origen = Pais_origen::create($request->all());

        return $pais_origen;
    }


    public function update(Request $request, Pais_origen $_pais_origen)
    {

        $_pais_origen->fill($request->all());
        $_pais_origen->save();

        return $_pais_origen;
    }
}

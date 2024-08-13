<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    //
    public function index()
    {

        return User::all();
    }


    public function store(Request $request)
    {
        $user = User::create($request->all());

        return $user;
    }

    public function update(Request $request, User $_user)
    {

        $_user->fill($request->all());
        if (!empty($request->password)) {
            $_user->password = Hash::make($request->password);
        }
        $_user->save();

        return $_user;
    }

    public function destroy(User $_user)
    {
        $_user->delete();

        return $_user;
    }
}

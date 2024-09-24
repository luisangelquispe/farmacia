<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoriaController;
use App\Http\Controllers\MarcaController;
use App\Http\Controllers\PaisOrigenController;
use App\Http\Controllers\ProductosController;
use App\Http\Controllers\ProductosLotesController;
use App\Http\Controllers\ProveedoresController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VentasController;
use App\Http\Controllers\VentasDetalleController;
use App\Models\productos;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');


Route::get("/user", [UserController::class, "index"])->middleware('auth:sanctum');
Route::post("/user", [UserController::class, "store"])->middleware('auth:sanctum');
Route::put("/user/{_user}", [UserController::class, "update"])->middleware('auth:sanctum');
Route::delete("/user/{_user}", [UserController::class, "destroy"])->middleware('auth:sanctum');


Route::get("/categorias", [CategoriaController::class, "index"])->middleware('auth:sanctum');
Route::post("/categorias", [CategoriaController::class, "store"])->middleware('auth:sanctum');
Route::put("/categorias/{_categoria}", [CategoriaController::class, "update"])->middleware('auth:sanctum');

Route::get("/marcas", [MarcaController::class, "index"])->middleware('auth:sanctum');
Route::post("/marcas", [MarcaController::class, "store"])->middleware('auth:sanctum');
Route::put("/marcas/{_marca}", [MarcaController::class, "update"])->middleware('auth:sanctum');

Route::get("/proveedores", [ProveedoresController::class, "index"])->middleware('auth:sanctum');
Route::post("/proveedores", [ProveedoresController::class, "store"])->middleware('auth:sanctum');
Route::put("/proveedores/{_proveedor}", [ProveedoresController::class, "update"])->middleware('auth:sanctum');

Route::get("/pais_origen", [PaisOrigenController::class, "index"])->middleware('auth:sanctum');
Route::post("/pais_origen", [PaisOrigenController::class, "store"])->middleware('auth:sanctum');
Route::put("/pais_origen/{_pais_origen}", [PaisOrigenController::class, "update"])->middleware('auth:sanctum');


Route::get("/producto", [ProductosController::class, "index"])->middleware('auth:sanctum');
Route::post("/producto", [ProductosController::class, "store"])->middleware('auth:sanctum');

Route::post("/producto_lote", [ProductosLotesController::class, "store"]);

Route::post("/venta", [VentasController::class, "store"])->middleware('auth:sanctum');
Route::get("/venta", [VentasController::class, "index"])->middleware('auth:sanctum');


Route::get("/vencimiento", [VentasDetalleController::class, "index"])->middleware('auth:sanctum');

Route::post("/rptVentas", [VentasController::class, "getRptVentas"])->middleware('auth:sanctum');
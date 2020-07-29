<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Empresa;
use App\Funcionario;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
 
// Empresas
Route::get('empresas', function() {
    return Empresa::all();
});
 
Route::get('empresas/{id}', function($id) {
    return Empresa::find($id);
});

Route::post('empresas', function(Request $request) {
    return Empresa::create($request->all());
});

Route::put('empresas/{id}', function(Request $request, $id) {
    $empresa = Empresa::findOrFail($id);
    $empresa->update($request->all());

    return $empresa;
});

Route::delete('empresas/{id}', function($id) {
    Empresa::find($id)->delete();

    return 204;
});

// Funcionarios
Route::get('funcionarios', function() {
    return Funcionario::all();
});
 
Route::get('funcionarios/{id}', function($id) {
    return Funcionario::find($id);
});

Route::post('funcionarios', function(Request $request) {
    return Funcionario::create($request->all());
});

Route::put('funcionarios/{id}', function(Request $request, $id) {
    $funcionario = Funcionario::findOrFail($id);
    $funcionario->update($request->all());

    return $funcionario;
});

Route::delete('funcionarios/{id}', function($id) {
    Funcionario::find($id)->delete();

    return 204;
});

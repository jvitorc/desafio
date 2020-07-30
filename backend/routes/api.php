<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Empresa;
use App\Funcionario;
use App\Http\Controllers\EmpresaController;

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
Route::get('empresas', 'EmpresaController@index');
Route::get('empresas/{id}', 'EmpresaController@show');
Route::post('empresas', 'EmpresaController@store');
Route::put('empresas/{id}', 'EmpresaController@update');
Route::delete('empresas/{id}', 'EmpresaController@destroy');
// Empresa -> Funcionarios
Route::get('empresas/{id}/funcionarios', 'EmpresaController@indexFuncionarios');
Route::get('empresas/{id}/funcionarios/{id_funcionario}', 'EmpresaController@showFuncionario');
Route::post('empresas/{id}/funcionarios', 'EmpresaController@atacchFuncionario');
Route::delete('empresas/{id}/funcionarios/{id_funcionario}', 'EmpresaController@detachFuncionario');


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

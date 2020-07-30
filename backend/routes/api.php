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
Route::get('funcionarios', 'FuncionarioController@index');
Route::get('funcionarios/{id}', 'FuncionarioController@show');
Route::post('funcionarios', 'FuncionarioController@store');
Route::put('funcionarios/{id}', 'FuncionarioController@update');
Route::delete('funcionarios/{id}', 'FuncionarioController@destroy');
// Funcionario -> Empresas
Route::get('funcionarios/{id}/empresas', 'FuncionarioController@indexEmpresas');
Route::get('funcionarios/{id}/empresas/{id_empresa}', 'FuncionarioController@showEmpresa');
Route::post('funcionarios/{id}/empresas', 'FuncionarioController@atacchEmpresa');
Route::delete('funcionarios/{id}/empresas/{id_empresa}', 'FuncionarioController@detachEmpresa');

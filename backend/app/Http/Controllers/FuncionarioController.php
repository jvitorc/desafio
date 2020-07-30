<?php

namespace App\Http\Controllers;

use App\Funcionario;
use App\Empresa;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class FuncionarioController extends Controller
{
    const REGEX_ACENTO = '[áàâãäªéèêëíìîïóòôõöºúùûüçñ]+';

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(Funcionario::all(), 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $nome = $cpf = $endereco = $login = $senha = $email = null;
        $msg = null;

        if ($request->exists('nome') && !preg_match('/'.FuncionarioController::REGEX_ACENTO.'/i', $request['nome'])) {
            $nome = $request['nome'];
        } else {
            $msg = "Nome invalido";
        }

        if ($request->exists('cpf') && is_numeric($request['cpf']) && strlen($request['cpf']) == 11) {
            $cpf = $request['cpf'];
        } else {
            $msg = "CPF invalido ";
        }

        if ($request->exists('endereco')) {
            $endereco = $request['endereco'];
        } else {
            $msg = "Endereco invalido ";
        } 

        if ($request->exists('email') && filter_var($request['email'], FILTER_VALIDATE_EMAIL)) {
            $email = $request['email'];            
        } else {
            $msg = "Email invalido ";
        }

        if ($request->exists('login') && !preg_match('/'.FuncionarioController::REGEX_ACENTO.'/i', $request['login'])) {
            $login = $request['login'];
        } else {
            $msg = "Email invalido";
        }

        if ($request->exists('senha')) {
            $senha = Hash::make($request['endereco']);
        } else {
            $msg = "Endereco invalido ";
        } 

        if (!$nome || !$cpf || !$endereco || !$login ||  !$senha || !$email)
            return response()->json($msg, 400);

        $data = [
            'nome' => $nome,
            'cpf' => $cpf,
            'endereco' => $endereco,
            'login' => $login,
            'senha' => $senha,
            'email' => $email
        ];

        return response()->json(Funcionario::create($data), 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $funcionario = Funcionario::find($id);
        if (!$funcionario)
            return response()->json("Funcionario não encontrado", 404);
        
        $empresas = Controller::map_nome($funcionario->empresas);

        $data = [
            'id' => $funcionario->id,
            'nome' => $funcionario->nome,
            'login' => $funcionario->login,
            'email' => $funcionario->email,
            'endereco' => $funcionario->endereco,
            'cpf' => $funcionario->cpf,
            'empresas' => $empresas
        ];

        return response()->json($data, 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $funcionario = Funcionario::find($id);
        if (!$funcionario)
            return response()->json("Funcionario não encontrado", 404);

        $data = null;
 
        if ($request->exists('nome')) {
            if(!(bool)preg_match('/'.FuncionarioController::REGEX_ACENTO.'/i', $request['nome'])) {
                $data['nome'] = $request['nome'];
            } else {
                return response()->json("Nome invalido", 304);
            }
        }

        if ($request->exists('cpf')) {
            if (is_numeric($request['cpf']) && strlen($request['cpf']) == 11) {
                $data['cpf'] = $request['cpf'];
            } else {
                return response()->json("CPF invalido", 304);
            }
        }

        if ($request->exists('endereco')) {
            $data['endereco'] = $request['endereco'];
        } 

        if ($request->exists('email')) { 
            if (filter_var($request['email'], FILTER_VALIDATE_EMAIL)) {
                $data['email'] = $request['email'];            
            } else {
                return response()->json("Email invalido ", 304);
            }
        }

        if ($request->exists('login')) {
            if (!preg_match('/'.FuncionarioController::REGEX_ACENTO.'/i', $request['login'])) {
                $data['login'] = $request['login'];
            } else {
                return response()->json("login invalido ", 304);
            }
        }

        if ($request->exists('senha')) {
            $data['senha'] = Hash::make($request['endereco']);
        }

        $funcionario->update($data);
        return response()->json($funcionario, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $funcionario = Funcionario::find($id);
        if (!$funcionario)
            return response()->json("Funcionario não encontrado", 404);

        $funcionario->delete();
        return response()->json(null,204);
    }

    // - -  Funcionario -> Empresas -- //
    public function indexEmpresas($id) {
        $funcionario = Funcionario::find($id);
        if (!$funcionario) {
            return response()->json("Funcionario não foi encotrada", 404);
        }

        return $funcionario->empresas;
    }

    public function showEmpresa($id, $id_empresa) {
        $funcionario = Funcionario::find($id);
        if (!$funcionario) {
            return response()->json("Funcionario não foi encotrado", 404);
        }

        if(!$funcionario->empresas->contains($id_empresa)){
            return response()->json("Empresa não foi encotrada", 404);
        }
        return response()->json(Empresa::find($id_empresa));
    }   


    public function atacchEmpresa(Request $request, $id) {
        $funcionario = Funcionario::find($id);
        if (!$funcionario) {
            return response()->json("Funcionario não foi encotrada", 404);
        }

        $empresa = Empresa::Find($request['id_empresa']);
        if (!$empresa) {
            return response()->json("Empresa nao foi encontrada", 404);
        }

        $funcionario->empresas()->attach($empresa);
        return response()->json(null, 204);
    }

    public function detachEmpresa($id, $id_empresa) {
        $funcionario = Funcionario::find($id);
        if (!$funcionario) {
            return response()->json("Funcionario não foi encotrada", 404);
        }

        if (!$funcionario->empresas->contains($id_empresa)) {
            return response()->json("Empresa nao foi encontrada", 404);
        }

        $funcionario->empresas()->detach($id_empresa);
        return response()->json(null, 204);
    }

    
}

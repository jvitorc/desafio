<?php

namespace App\Http\Controllers;

use Illuminate\Database\Eloquent\Collection\map;
use Illuminate\Http\Request;
use App\Empresa;

class EmpresaController extends Controller
{
    const REGEX_ACENTO = '[áàâãäªéèêëíìîïóòôõöºúùûüçñ]+';

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(Empresa::all(), 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $nome = $cnpj = $endereco = null;
        $msg = null;

        if ($request->exists('nome') && !preg_match('/'.EmpresaController::REGEX_ACENTO.'/i', $request['nome'])) {
            $nome = $request['nome'];
        } else {
            $msg = "Nome invalido";
        }

        if ($request->exists('cnpj') && is_numeric($request['cnpj']) && strlen($request['cnpj']) == 14) {
            $cnpj = $request['cnpj'];
        } else {
            $msg = "CNPJ invalido ";
        }

        if ($request->exists('endereco')) {
            $endereco = $request['endereco'];
        } else {
            $msg = "Endereco invalido ";
        } 
        
        if (!$nome || !$cnpj || !$endereco)
            return response()->json($msg, 400);
        
        $data = [
            'nome' => $nome,
            'cnpj' => $cnpj,
            'endereco' => $endereco
        ];
        return response()->json(Empresa::create($data), 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $empresa = Empresa::find($id);
        if (!$empresa)
            return response()->json("Empresa nao encontrada", 404);

        $funcionarios = Controller::map_nome($empresa->funcionarios);

        $data = [
            'id' => $empresa->id,
            'nome' => $empresa->nome,
            'endereco' => $empresa->endereco,
            'cnpj' => $empresa->cnpj,
            'funcionarios' => $funcionarios
        ];
        return response()->json($data, 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $empresa = Empresa::find($id);
        if (!$empresa)
            return response()->json("Empresa nao encontrada", 404);
        
        $data = null;

        if ($request->exists('nome')) {
            if (!(bool)preg_match('/'.EmpresaController::REGEX_ACENTO.'/i', $request['nome'])) {
                $data['nome'] = $request['nome'];
            } else {
                return response()->json("Nome invalido", 304);
            }
        }


        if ($request->exists('cnpj')) {
            if (is_numeric($request['cnpj']) && strlen($request['cnpj']) == 14) {
                $data['cnpj'] = $request['cnpj'];
            } else {
                return response()->json("CNPJ invalido", 304);
            }
        }

        if ($request->exists('endereco')) {
            $data['endereco'] = $request['endereco'];
        }

        if(!$data)
            return response()->json("Não existe campo para atualizar", 304);

        $empresa->update($data);
        return response()->json($empresa, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $empresa = Empresa::find($id);
        if (!$empresa) {
            return response()->json("Empresa não foi encotrada", 404);
        }
        $empresa->delete();
        return response()->json(null, 204);
    }
}

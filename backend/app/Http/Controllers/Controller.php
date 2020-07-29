<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public static function map_nome($array) {
        if ($array == null || empty($array))
            return "";
        $result = array();

        foreach ($array as $item) {
            $result = [
                'id' => $item->id,
                'nome' => $item->nome
            ];
        }
        return $result;
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmpresaFuncionarioTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('empresa_funcionario', function (Blueprint $table) {
            $table->bigInteger('empresa_id')->unsigned();
            $table->bigInteger('funcionario_id')->unsigned();
    
            $table->primary(['empresa_id', 'funcionario_id']);
            $table->foreign('empresa_id')->references('id')->on('empresas');
            $table->foreign('funcionario_id')->references('id')->on('funcionarios');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('empresa_funcionario');
    }
}

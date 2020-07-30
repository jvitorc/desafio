import { Funcionario } from './../components/funcionarios/funcionario.model';
import { Empresa } from './../components/empresas/empresa.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { 
  }

  checkFuncionario(funcionario: Funcionario): Boolean {
    return  this.checkName(funcionario.nome) &&
            this.checkName(funcionario.login) &&
            this.checkCPF(funcionario.cpf) &&
            this.checkNoEmpty(funcionario.endereco) &&
            this.checkNoEmpty(funcionario.email) &&
            this.checkNoEmpty(funcionario.senha);
  }


  checkEmpresa(empresa: Empresa): Boolean {
    return this.checkCNPJ(empresa.cnpj) && 
            this.checkName(empresa.nome) && 
            this.checkNoEmpty(empresa.endereco);
  }

  checkCPF(cpf: string): Boolean {
    return this.isNumeric(cpf) && cpf.length == 11;
  }

  checkCNPJ(cnpj: string): Boolean {
    return this.isNumeric(cnpj) && cnpj.length == 14
  }

  isNumeric(value: string): Boolean {
    return /^[0-9]+$/.test(value);
  }

  checkName(name: string): Boolean {
    return /^[A-Za-z0-9 ]+$/.test(name);
  }

  checkNoEmpty(value: string): Boolean {
    return !(value.length == 0);
  }

}

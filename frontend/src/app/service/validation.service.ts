import { Empresa } from './../components/empresas/empresa.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { 
  }

  checkEmpresa(empresa: Empresa): Boolean {
    return this.checkCNPJ(empresa.cnpj) && 
            this.checkName(empresa.nome) && 
            this.checkNoEmpty(empresa.endereco);
  }

  checkCNPJ(cnpj: string): Boolean {
    return this.isNumeric(cnpj) && cnpj.length == 14
  }

  isNumeric(value: string): Boolean {
    return /^[0-9]+$/.test(value);
  }

  checkName(name: string): Boolean {
    return /^[A-Za-z ]+$/.test(name);
  }

  checkNoEmpty(value: string): Boolean {
    return !(value.length == 0);
  }

}

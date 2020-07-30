import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { 
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

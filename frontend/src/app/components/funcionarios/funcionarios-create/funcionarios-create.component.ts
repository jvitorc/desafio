import { Funcionario } from './../funcionario.model';
import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';
import { ValidationService } from 'src/app/service/validation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-funcionarios-create',
  templateUrl: './funcionarios-create.component.html',
  styleUrls: ['./funcionarios-create.component.css']
})
export class FuncionariosCreateComponent implements OnInit {

  funcionario: Funcionario = {
    nome: "",
    login: "",
    senha: "",
    email: "",
    cpf: "" ,
    endereco: ""
  };


  constructor(
      private crudService: CrudService, 
      private vService: ValidationService,
      private router: Router
    ) { }

  ngOnInit(): void {
  }

  createFuncionario(): void {
    if (this.vService.checkFuncionario(this.funcionario)) {
      this.crudService.create(this.funcionario, 'funcionarios').subscribe(() => {
        this.crudService.showMessage("Funcionario criado");
        this.router.navigate(['/funcionarios']);
      })
    } else {
      this.crudService.showMessage("Erro: Campo invalido")
    }
  }

  cancel(): void {
    this.router.navigate(['/funcionarios']);
  }
}

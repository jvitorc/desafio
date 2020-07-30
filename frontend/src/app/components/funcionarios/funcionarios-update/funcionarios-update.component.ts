import { Router, ActivatedRoute } from '@angular/router';
import { ValidationService } from 'src/app/service/validation.service';
import { CrudService } from 'src/app/service/crud.service';
import { Component, OnInit } from '@angular/core';
import { Funcionario } from '../funcionario.model';

@Component({
  selector: 'app-funcionarios-update',
  templateUrl: './funcionarios-update.component.html',
  styleUrls: ['./funcionarios-update.component.css']
})
export class FuncionariosUpdateComponent implements OnInit {


  funcionario: Funcionario = {
    nome: "",
    login: "",
    senha: "",
    email: "",
    cpf: "" ,
    endereco: ""
  };



  constructor(private crudService: CrudService,
    private router: Router,
    private route: ActivatedRoute,
    private vService: ValidationService
    ) { }

    ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.crudService.readByID(id, 'funcionarios').subscribe(funcionario => {
      this.funcionario = funcionario;
    });
  }

  updateFuncionario(): void {
    if (this.vService.checkFuncionario(this.funcionario)) {
      this.crudService.update(this.funcionario, 'funcionarios').subscribe(() => {
        this.crudService.showMessage("Funcionario atualizado");
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

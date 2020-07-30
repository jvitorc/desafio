import { Funcionario } from './../funcionario.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-funcionarios-delete',
  templateUrl: './funcionarios-delete.component.html',
  styleUrls: ['./funcionarios-delete.component.css']
})
export class FuncionariosDeleteComponent implements OnInit {

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
    ) { }

    ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.crudService.readByID(id, 'funcionarios').subscribe(funcionario => {
      this.funcionario = funcionario;
    });
  }

  deleteFuncionario(): void {
    this.crudService.delete(this.funcionario.id, 'funcionarios').subscribe(() => {
      this.crudService.showMessage("Funcionario removido");
      this.router.navigate(['/funcionarios'])
    })
  }

  cancel(): void {
    this.router.navigate(['/funcionarios']);
  }

}

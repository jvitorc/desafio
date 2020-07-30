import { CrudService } from 'src/app/service/crud.service';
import { Funcionario } from './../funcionario.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionarios-read',
  templateUrl: './funcionarios-read.component.html',
  styleUrls: ['./funcionarios-read.component.css']
})
export class FuncionariosReadComponent implements OnInit {

  funcionarios: Funcionario[];
  columnsToDisplay = ['id', 'nome', 'actions']

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.crudService.read("funcionarios").subscribe(funcionarios => {
      this.funcionarios = funcionarios;
      console.log(funcionarios);
    })
  }


}

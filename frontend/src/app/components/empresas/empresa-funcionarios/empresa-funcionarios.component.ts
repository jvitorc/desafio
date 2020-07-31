import { Empresa } from './../empresa.model';
import { Funcionario } from './../../funcionarios/funcionario.model';
import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ValidationService } from 'src/app/service/validation.service';
import { SELECT_PANEL_INDENT_PADDING_X } from '@angular/material/select';

@Component({
  selector: 'app-empresa-funcionarios',
  templateUrl: './empresa-funcionarios.component.html',
  styleUrls: ['./empresa-funcionarios.component.css']
})
export class EmpresaFuncionariosComponent implements OnInit {

  funcionarios: Funcionario[];
  empresa: Empresa;

  id_funcionario: number;

  columnsToDisplay = ['id', 'nome', 'delete']

  constructor(private crudService: CrudService,
    private router: Router,
    private route: ActivatedRoute,
    private vService: ValidationService
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.crudService.readByID(id, 'empresas').subscribe(empresa => {
      this.funcionarios = empresa.funcionarios;
      this.empresa = empresa;
    });
  }

  AddFuncionario() {
    const data = {
      'id_funcionario': this.id_funcionario
    };

    const url = `empresas/${this.empresa.id}/funcionarios`;
    this.crudService.create(data, url).subscribe(() => {
      this.crudService.showMessage("Funcionario adicionado");
      window.location.reload();
    });
  }
}

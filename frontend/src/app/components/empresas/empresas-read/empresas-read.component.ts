import { CrudService } from './../../../service/crud.service';
import { Empresa } from './../empresa.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empresas-read',
  templateUrl: './empresas-read.component.html',
  styleUrls: ['./empresas-read.component.css']
})
export class EmpresasReadComponent implements OnInit {

  empresas: Empresa[];

  columnsToDisplay = ['id', 'nome', 'actions'];

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.crudService.read("empresas").subscribe(empresas => {
      this.empresas = empresas;
      console.log(empresas);
    })
  }

}

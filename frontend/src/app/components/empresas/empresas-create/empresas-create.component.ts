import { Empresa } from './../empresa.model';
import { CrudService } from './../../../service/crud.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empresas-create',
  templateUrl: './empresas-create.component.html',
  styleUrls: ['./empresas-create.component.css']
})
export class EmpresasCreateComponent implements OnInit {

  private empresa: Empresa = {
    nome: "",
    cnpj: "" ,
    endereco: ""
  };


  constructor(private crudService: CrudService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  createEmpresa(): void {
    this.crudService.create(this.empresa, 'empresas').subscribe(() => {
      this.crudService.showMessage("Empresa criada");
      this.router.navigate(['/empresas']);
    })
  }

  cancel(): void {
    this.router.navigate(['/empresas']);
  }
}

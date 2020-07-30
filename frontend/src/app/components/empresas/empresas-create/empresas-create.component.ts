import { CrudService } from './../../../service/crud.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empresas-create',
  templateUrl: './empresas-create.component.html',
  styleUrls: ['./empresas-create.component.css']
})
export class EmpresasCreateComponent implements OnInit {

  constructor(private crudService: CrudService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  createEmpresa(): void {
    this.crudService.showMessage("TESTE");
  }

  cancel(): void {
    this.router.navigate(['/empresas']);
  }
}

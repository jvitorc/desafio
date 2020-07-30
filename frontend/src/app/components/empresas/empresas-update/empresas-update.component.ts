import { ValidationService } from './../../../service/validation.service';
import { CrudService } from './../../../service/crud.service';
import { Component, OnInit } from '@angular/core';
import { Empresa } from '../empresa.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-empresas-update',
  templateUrl: './empresas-update.component.html',
  styleUrls: ['./empresas-update.component.css']
})
export class EmpresasUpdateComponent implements OnInit {

  empresa: Empresa = {
    nome: "",
    cnpj: "" ,
    endereco: ""
  };

  constructor(private crudService: CrudService,
    private router: Router,
    private route: ActivatedRoute,
    private vService: ValidationService
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.crudService.readByID(id, 'empresas').subscribe(empresa => {
      this.empresa = empresa;
    });
  }

  updateEmpresa(): void {
    if (this.vService.checkEmpresa(this.empresa)) {
      this.crudService.update(this.empresa, 'empresas').subscribe(() => {
        this.crudService.showMessage("Empresa alterada");
        this.router.navigate(['/empresas'])
      });
    } else {
        this.crudService.showMessage("Erro: Campo invalido")     
    }
  }

  cancel(): void {
    this.router.navigate(['/empresas'])
  }
}

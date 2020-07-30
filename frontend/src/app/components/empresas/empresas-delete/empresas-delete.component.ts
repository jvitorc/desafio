import { Component, OnInit } from '@angular/core';
import { Empresa } from '../empresa.model';
import { CrudService } from 'src/app/service/crud.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-empresas-delete',
  templateUrl: './empresas-delete.component.html',
  styleUrls: ['./empresas-delete.component.css']
})
export class EmpresasDeleteComponent implements OnInit {

  empresa: Empresa = {
    nome: "",
    cnpj: "" ,
    endereco: ""
  };

  constructor(private crudService: CrudService,
    private router: Router,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.crudService.readByID(id, 'empresas').subscribe(empresa => {
      this.empresa = empresa;
    });
  }

  deleteEmpresa(): void {
    this.crudService.delete(this.empresa.id, 'empresas').subscribe(() => {
      this.crudService.showMessage("Empresa removida");
      this.router.navigate(['/empresas'])
      })
  }

  cancel(): void {
    this.router.navigate(['/empresas'])
  }
}

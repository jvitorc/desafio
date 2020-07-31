import { ActivatedRoute } from '@angular/router';
import { CrudService } from './../../../service/crud.service';
import { Funcionario } from './../funcionario.model';
import { Empresa } from './../../empresas/empresa.model';
import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-funcionario-empresas',
  templateUrl: './funcionario-empresas.component.html',
  styleUrls: ['./funcionario-empresas.component.css']
})
export class FuncionarioEmpresasComponent implements OnInit {


  empresas: Empresa[];
  funcionario: Funcionario;

  id_empresa: number;

  columnsToDisplay = ['id', 'nome', 'delete']

  constructor(private crudService: CrudService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.crudService.readByID(id, 'funcionarios').subscribe(funcionario => {
      this.empresas = funcionario.empresas;
      this.funcionario = funcionario;
    });
  }

  addEmpresa() {
    const data = {
      'id_empresa': this.id_empresa
    };

    const url = `funcionarios/${this.funcionario.id}/empresas`;
    this.crudService.create(data, url).subscribe(() => {
      this.crudService.showMessage("Empresa adicionada");
      delay(3000);
      window.location.reload();
    });
  }

  removeEmpresa(empresa: Empresa) {
    const url = `funcionarios/${this.funcionario.id}/empresas`;
    this.crudService.delete(empresa.id,url).subscribe(() => {
      this.crudService.showMessage("Empresa removida");
      delay(3000);
      window.location.reload();
    });
  }
}

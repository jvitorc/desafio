import { FuncionarioEmpresasComponent } from './components/funcionarios/funcionario-empresas/funcionario-empresas.component';
import { FuncionariosDeleteComponent } from './components/funcionarios/funcionarios-delete/funcionarios-delete.component';
import { FuncionariosUpdateComponent } from './components/funcionarios/funcionarios-update/funcionarios-update.component';
import { FuncionariosCreateComponent } from './components/funcionarios/funcionarios-create/funcionarios-create.component';
import { EmpresasDeleteComponent } from './components/empresas/empresas-delete/empresas-delete.component';
import { EmpresasUpdateComponent } from './components/empresas/empresas-update/empresas-update.component';
import { FuncionariosCrudComponent } from './views/funcionarios-crud/funcionarios-crud.component';
import { EmpresasCrudComponent } from './views/empresas-crud/empresas-crud.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { EmpresasCreateComponent } from './components/empresas/empresas-create/empresas-create.component';
import { EmpresaFuncionariosComponent } from './components/empresas/empresa-funcionarios/empresa-funcionarios.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "empresas",
    component: EmpresasCrudComponent
  },
  {
    path: "empresas/create",
    component: EmpresasCreateComponent
  }, 
  {
    path: "empresas/update/:id",
    component: EmpresasUpdateComponent
  },
  {
    path: "empresas/delete/:id",
    component: EmpresasDeleteComponent
  },
  {
    path: "empresas/funcionarios/:id",
    component: EmpresaFuncionariosComponent
  },
  {
    path: "funcionarios",
    component: FuncionariosCrudComponent
  },
  {
    path: "funcionarios/create",
    component: FuncionariosCreateComponent
  },
  {
    path: "funcionarios/update/:id",
    component: FuncionariosUpdateComponent
  },
  {
    path: "funcionarios/delete/:id",
    component: FuncionariosDeleteComponent
  },
  {
    path: "funcionarios/empresas/:id",
    component: FuncionarioEmpresasComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

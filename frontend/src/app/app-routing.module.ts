import { FuncionariosCreateComponent } from './components/funcionarios/funcionarios-create/funcionarios-create.component';
import { EmpresasDeleteComponent } from './components/empresas/empresas-delete/empresas-delete.component';
import { EmpresasUpdateComponent } from './components/empresas/empresas-update/empresas-update.component';
import { FuncionariosCrudComponent } from './views/funcionarios-crud/funcionarios-crud.component';
import { EmpresasCrudComponent } from './views/empresas-crud/empresas-crud.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { EmpresasCreateComponent } from './components/empresas/empresas-create/empresas-create.component';

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
    path: "funcionarios",
    component: FuncionariosCrudComponent
  },
  {
    path: "funcionarios/create",
    component: FuncionariosCreateComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

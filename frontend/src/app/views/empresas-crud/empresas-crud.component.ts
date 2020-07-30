import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empresas-crud',
  templateUrl: './empresas-crud.component.html',
  styleUrls: ['./empresas-crud.component.css']
})
export class EmpresasCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToEmpresaCreate() {
    this.router.navigate(['/empresas/create'])
  }
}

import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionarios-crud',
  templateUrl: './funcionarios-crud.component.html',
  styleUrls: ['./funcionarios-crud.component.css']
})
export class FuncionariosCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToFuncionarioCreate() {
    this.router.navigate(['/funcionarios/create'])
  }
}

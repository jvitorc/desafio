import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CrudService {

  baseUrl = "http://127.0.0.1:8001/api";
  baseTesteUrl = "http://localhost:3001";

  constructor(private snackBar: MatSnackBar, private httpClient:  HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    });
  }

  create(item: any, url=""): Observable<any> {
    const new_url = `${this.baseUrl}/${url}`; 
    // const new_url = `${this.baseTesteUrl}/${url}`; 

    console.log(new_url, item);
    return this.httpClient.post<any>(new_url, item);
  }

}

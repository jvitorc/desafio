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

  create(item: any, url: string): Observable<any> {
    const new_url = `${this.baseUrl}/${url}`; 
    return this.httpClient.post<any>(new_url, item);
  }

  read(url: string): Observable<any> {
    const new_url = `${this.baseUrl}/${url}`; 
    return this.httpClient.get<any>(new_url);
  }

  readByID(id: string, url: string): Observable<any> {
    const new_url = `${this.baseUrl}/${url}/${id}`;
    return this.httpClient.get<any>(url);
  }

  update(item: any, url: string): Observable<any> {
    const new_url = `${this.baseUrl}/${url}/${item.id}`;
    return this.httpClient.patch<any>(url, item);
  }

}

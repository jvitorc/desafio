import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CrudService {

  baseUrl = "http://127.0.0.1:8000/api";
  // baseTesteUrl = "http://localhost:3001";

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
    console.log("ERROR", item, url);
    return this.httpClient.post<any>(new_url, item).pipe(
      map(obj => obj),catchError(e => this.handlerError(e))
    );
  }

  read(url: string): Observable<any> {
    const new_url = `${this.baseUrl}/${url}`; 
    return this.httpClient.get<any>(new_url).pipe(
      map(obj => obj),catchError(e => this.handlerError(e))
    );
  }

  readByID(id: string, url: string): Observable<any> {
    const new_url = `${this.baseUrl}/${url}/${id}`;
    return this.httpClient.get<any>(new_url).pipe(
      map(obj => obj),catchError(e => this.handlerError(e))
    );
  }

  update(item: any, url: string): Observable<any> {
    const new_url = `${this.baseUrl}/${url}/${item.id}`;
    return this.httpClient.put<any>(new_url, item).pipe(
      map(obj => obj),catchError(e => this.handlerError(e))
    );
  }

  delete(id: number, url: string): Observable<any> {
    const new_url = `${this.baseUrl}/${url}/${id}`;
    console.log(new_url);
    return this.httpClient.delete<any>(new_url).pipe(
      map(obj => obj),catchError(e =>  this.handlerError(e))
    );
  }

  handlerError(e: any) {
    this.showMessage("Ocorreu um erro");
    return EMPTY;
  }

}

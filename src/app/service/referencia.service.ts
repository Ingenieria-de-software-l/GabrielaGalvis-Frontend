import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Referencia } from '../modelo/referencia/referencia';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ReferenciaService {

  referenciaURL='http://localhost:8080/referencia/';

  constructor(private httpClient: HttpClient) { }

  public listar(): Observable<Referencia[]> {
    return this.httpClient.get<Referencia[]>(this.referenciaURL + 'listaReferencia');
  }

  public save(referencia: Referencia): Observable<any> {
    return this.httpClient.post<any>(this.referenciaURL + 'createReferenciaa', referencia);
  }

}

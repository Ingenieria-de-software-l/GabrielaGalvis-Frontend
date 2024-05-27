import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Laboral } from '../modelo/laboral/laboral';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LaboralService {

  laboralURL = 'http://localhost:8080/laboral/';

  constructor(private httpClient: HttpClient) { }

  public listar(): Observable<Laboral[]> {
    return this.httpClient.get<Laboral[]>(this.laboralURL + 'listaLaboral');
  }

  public save(laboral: Laboral): Observable<any> {
    return this.httpClient.post<any>(this.laboralURL + 'createLaboral', laboral);
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personal } from '../modelo/personal/personal';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  personalURL='http://localhost:8080/personal/';

  constructor(private httpClient: HttpClient, private route : Router) { }

  public listar(): Observable<Personal[]> {
    return this.httpClient.get<Personal[]>(this.personalURL + 'listaPersonal');
  }

  public save(personal: Personal): Observable<any> {
    return this.httpClient.post<any>(this.personalURL + 'createPersonal', personal);
  }


}

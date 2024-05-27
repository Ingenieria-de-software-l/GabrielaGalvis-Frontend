import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudio } from '../modelo/estudio/estudio';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EstudioService {

  estudioURL = 'http://localhost:8080/estudio/';

  constructor(private httpClient: HttpClient, private route: Router) {}

    public listar(): Observable<Estudio[]> {
      return this.httpClient.get<Estudio[]>(this.estudioURL + 'listaEstudio');
    }

    public save(estudio: Estudio): Observable<any> {
      return this.httpClient.post<any>(this.estudioURL + 'createEstudio', estudio);
    }

  }


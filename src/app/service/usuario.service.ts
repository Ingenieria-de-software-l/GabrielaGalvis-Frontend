import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../modelo/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  laboralURL = 'http://localhost:8080/usuario/';

  constructor(private httpClient: HttpClient) { }

  public listar(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.laboralURL + 'listaLaboral');
  }

  public save(usuario: Usuario): Observable<any> {
    return this.httpClient.post<any>(this.laboralURL + 'createUsuario', usuario);
  }
}

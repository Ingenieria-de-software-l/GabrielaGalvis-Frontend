import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelo/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-lista-general',
  templateUrl: './lista-general.component.html',
  styleUrls: ['./lista-general.component.css']
})
export class ListaGeneralComponent implements OnInit {
  usuarios: Usuario[] = [];

  constructor(private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.usuarioService.listar().subscribe(data => {
      this.usuarios = data;
      console.log(this.usuarios);
    });
    
  }

 
}

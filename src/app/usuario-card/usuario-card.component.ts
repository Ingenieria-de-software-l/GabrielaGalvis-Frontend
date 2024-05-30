import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from '../modelo/usuario';

@Component({
  selector: 'app-usuario-card',
  templateUrl: './usuario-card.component.html',
  styleUrls: ['./usuario-card.component.css']
})
export class UsuarioCardComponent implements OnInit{

  @Input() usuario!: Usuario;

  constructor() {}

  ngOnInit(): void {
    console.log(this.usuario); // Añadir este console.log para verificar los datos
  }
}

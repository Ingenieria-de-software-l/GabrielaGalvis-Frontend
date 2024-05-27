import { Component, OnInit } from '@angular/core';
import { Personal } from 'src/app/modelo/personal/personal';
import { PersonalService } from 'src/app/service/personal.service';

@Component({
  selector: 'app-formulario-personal',
  templateUrl: './formulario-personal.component.html',
  styleUrls: ['./formulario-personal.component.css']
})
export class FormularioPersonalComponent implements OnInit {

  identificacion: string = '';
  nombre: string = '';
  apellidos: string = '';
  sexo: string = '';
  email: string = '';
  telefono: string = '';
  direccion: string = '';
  fechaNacimiento: Date = new Date();
  ocupacion: string = '';
  estadoCivil: string = '';

  constructor(private personalService: PersonalService) { }

  ngOnInit(): void {
  }

  public onCreatePersonal(): void {
    const personal = new Personal(this.identificacion, this.nombre, this.apellidos, this.sexo, this.email, this.telefono, this.direccion, this.fechaNacimiento, this.ocupacion, this.estadoCivil);
    this.personalService.save(personal).subscribe(data => {
      alert("Informacion personal añadido");
      window.location.reload();
    }, err => {
      alert("Fallo");
      window.location.reload();
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { Referencia } from 'src/app/modelo/referencia/referencia';
import { ReferenciaService } from 'src/app/service/referencia.service';

@Component({
  selector: 'app-formulario-referencia',
  templateUrl: './formulario-referencia.component.html',
  styleUrls: ['./formulario-referencia.component.css']
})
export class FormularioReferenciaComponent implements OnInit {

  nombre: string = '';
  ocupacion: string = '';
  parentesco: string = '';
  telefono: string = '';

  constructor(private referenciaServices: ReferenciaService) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const referencia = new Referencia(this.nombre, this.ocupacion, this.parentesco, this.telefono);
    this.referenciaServices.save(referencia).subscribe(data => {
      alert("Referencia añadida");
    }, err => {
      console.error('Error al crear la referencia', err);
      alert("Fallo al crear la referencia: " + err.message);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Estudio } from 'src/app/modelo/estudio/estudio';
import { EstudioService } from 'src/app/service/estudio.service';

@Component({
  selector: 'app-formulario-estudio',
  templateUrl: './formulario-estudio.component.html',
  styleUrls: ['./formulario-estudio.component.css']
})
export class FormularioEstudioComponent implements OnInit {

  nombre: string = '';
  lugarGrado: string = '';
  anio: Date = new Date();


  constructor(private estudioService: EstudioService) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const estudio = new Estudio(this.nombre, this.lugarGrado, this.anio);
    this.estudioService.save(estudio).subscribe(data => {
      alert("Estudio añadido");
    }, err => {
      alert("Fallo");
    });
  }

}

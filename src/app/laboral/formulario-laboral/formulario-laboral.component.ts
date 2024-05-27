import { Component, OnInit } from '@angular/core';
import { Laboral } from 'src/app/modelo/laboral/laboral';
import { LaboralService } from 'src/app/service/laboral.service';
import { ReferenciaService } from 'src/app/service/referencia.service';

@Component({
  selector: 'app-formulario-laboral',
  templateUrl: './formulario-laboral.component.html',
  styleUrls: ['./formulario-laboral.component.css']
})
export class FormularioLaboralComponent implements OnInit {

  nombreEmpresa: string ='';
  direccionEmpresa: string ='';
  telefonoEmpresa: string ='';
  nombreJefe: string ='';
  fechaInicio: Date = new Date();
  fechaFin: Date = new Date();
  cargo: string ='';

  constructor(private laboralService: LaboralService, private referenciasService: ReferenciaService) { }

  public ngOnInit(): void {
  }

  public onCreate(): void {
    const laboral = new Laboral(this.nombreEmpresa, this.direccionEmpresa, this.telefonoEmpresa, this.nombreJefe, this.fechaInicio, this.fechaFin, this.cargo);
    this.laboralService.save(laboral).subscribe(data => {
      alert("Laboral añadido");
      window.location.reload();
    }, err => {
      alert("Fallo");
      window.location.reload();
    });
  }

}

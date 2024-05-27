import { Component, OnInit } from '@angular/core';
import { Estudio } from 'src/app/modelo/estudio/estudio';
import { Laboral } from 'src/app/modelo/laboral/laboral';
import { Personal } from 'src/app/modelo/personal/personal';
import { Referencia } from 'src/app/modelo/referencia/referencia';
import { EstudioService } from 'src/app/service/estudio.service';
import { LaboralService } from 'src/app/service/laboral.service';
import { PersonalService } from 'src/app/service/personal.service';
import { ReferenciaService } from 'src/app/service/referencia.service';

@Component({
  selector: 'app-lista-general',
  templateUrl: './lista-general.component.html',
  styleUrls: ['./lista-general.component.css']
})
export class ListaGeneralComponent implements OnInit {

  estudio: Estudio[] = [];
  laboral: Laboral[]=[];
  personal: Personal[] = [];
  referencias: Referencia[] = [];

  constructor(private estudioService: EstudioService,
    private laboralService: LaboralService, private personalService: PersonalService,
    private referenciaService: ReferenciaService
  ) {}

  ngOnInit(): void {
    // this.cargarEstudios();
    // this.cargarLaborales();
    // this.cargarPersonales();
    // this.cargarReferencias();
  }

  cargarEstudios(): void{
    this.estudioService.listar().subscribe(

      data =>{
        this.estudio= data;

      },
      err => {
        console.log(err)
      }
    )
  }

  cargarLaborales(): void{
    this.laboralService.listar().subscribe(

      data =>{
        this.laboral= data;

      },
      err => {
        console.log(err)
      }
    )
  }

  cargarPersonales(): void{
    this.personalService.listar().subscribe(

      data =>{
        this.personal= data;

      },
      err => {
        console.log(err)
      }
    )
  }

  cargarReferencias(): void{
    this.referenciaService.listar().subscribe(

      data =>{
        this.referencias= data;

      },
      err => {
        console.log(err)
      }
    )
  }
}

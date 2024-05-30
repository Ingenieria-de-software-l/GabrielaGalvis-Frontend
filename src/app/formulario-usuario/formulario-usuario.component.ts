import { Component } from '@angular/core';
import { PersonalService } from '../service/personal.service';
import { Personal } from '../modelo/personal/personal';
import { Estudio } from '../modelo/estudio/estudio';
import { EstudioService } from '../service/estudio.service';
import { ReferenciaService } from '../service/referencia.service';
import { Referencia } from '../modelo/referencia/referencia';
import { LaboralService } from '../service/laboral.service';
import { Laboral } from '../modelo/laboral/laboral';
import { UsuarioService } from '../service/usuario.service';
import { Usuario } from '../modelo/usuario';

@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.css']
})
export class FormularioUsuarioComponent {
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
  nombreEstudio: string = '';
  lugarGrado: string = '';
  anio: Date = new Date();
  nombreReferencia: string = '';
  ocupacionReferencia: string = '';
  parentesco: string = '';
  telefonoReferencia: string = '';
  nombreEmpresa: string = '';
  direccionEmpresa: string = '';
  telefonoEmpresa: string = '';
  nombreJefe: string = '';
  fechaInicio: Date = new Date();
  fechaFin: Date = new Date();
  cargo: string = '';

  constructor(
    private personalService: PersonalService,
    private estudioService: EstudioService,
    private referenciaService: ReferenciaService,
    private laboralService: LaboralService,
    private usuarioService: UsuarioService
  ) {}

  public onCreateUsuario(): void {
    const personal = new Personal(this.identificacion, this.nombre, this.apellidos, this.sexo, this.email, this.telefono, this.direccion, this.fechaNacimiento, this.ocupacion, this.estadoCivil);
    this.personalService.save(personal).subscribe(data => {
      
    })
    const estudio = new Estudio(this.nombreEstudio, this.lugarGrado, this.anio);
    this.estudioService.save(estudio).subscribe(data => {
      
    })
    const referencia = new Referencia(this.nombreReferencia, this.ocupacionReferencia, this.parentesco, this.telefonoReferencia);
    this.referenciaService.save(referencia).subscribe(data => {
      
    })
    const laboral = new Laboral(this.nombreEmpresa, this.direccionEmpresa, this.telefonoEmpresa, this.nombreJefe, this.fechaInicio, this.fechaFin, this.cargo);
    this.laboralService.save(laboral).subscribe(data => {
      
    })
    const usuario = new Usuario(0, personal, estudio, referencia, laboral);

    this.usuarioService.save(usuario).subscribe(
      data => {
        alert('Usuario añadido');
      },
      err => {
        alert('Fallo');
      }
    );
  }
}

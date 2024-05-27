export class Laboral {

  public nombreEmpresa: string;
  public direccionEmpresa:string;
  public telefonoEmpresa: string;
  public nombreJefe: string;
  public fechaInicio: Date;
  public fechaFin: Date;
  public cargo: string;

  constructor(nombreEmpresa: string,direccionEmpresa: string,telefonoEmpresa: string,nombreJefe: string,fechaInicio: Date,fechaFin: Date,cargo: string) {
    this.nombreEmpresa = nombreEmpresa;
    this.direccionEmpresa = direccionEmpresa;
    this.telefonoEmpresa = telefonoEmpresa;
    this.nombreJefe = nombreJefe;
    this.fechaInicio = fechaInicio;
    this.fechaFin = fechaFin;
    this.cargo = cargo;
  }

}

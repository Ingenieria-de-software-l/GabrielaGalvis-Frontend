export class Personal {

  public identificacion:string;
  public nombrePersona:string;
  public apellidoPersona:string;
  public sexoPersona:string;
  public correoPersona:string;
  public telefonoPersona:string;
  public direccionPersona:string;
  public fechaNacimientoPersona:Date;
  public ocupacion:string;
  public estadoCivil:string;


  constructor(identificacion:string,nombrePersona:string,apellidoPersona:string,sexoPersona:string,correoPersona:string,telefonoPersona:string,direccionPersona:string,fechaNacimientoPersona:Date,ocupacion:string,estadoCivil:string) {
    this.identificacion = identificacion;
    this.nombrePersona = nombrePersona;
    this.apellidoPersona = apellidoPersona;
    this.sexoPersona = sexoPersona;
    this.correoPersona = correoPersona;
    this.telefonoPersona = telefonoPersona;
    this.direccionPersona = direccionPersona;
    this.fechaNacimientoPersona = fechaNacimientoPersona;
    this.ocupacion = ocupacion;
    this.estadoCivil = estadoCivil;
  }

}

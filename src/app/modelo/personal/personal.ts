export class Personal {

  public identificacion:string;
  public nombre:string;
  public apellidos:string;
  public sexo:string;
  public email:string;
  public telefono:string;
  public direccion:string;
  public fechaNacimiento:Date;
  public ocupacion:string;
  public estadoCivil:string;


  constructor(identificacion:string,nombre:string,apellidos:string,sexo:string,email:string,telefono:string,direccion:string,fechaNacimiento:Date,ocupacion:string,estadoCivil:string) {
    this.identificacion = identificacion;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.sexo = sexo;
    this.email = email;
    this.telefono = telefono;
    this.direccion = direccion;
    this.fechaNacimiento = fechaNacimiento;
    this.ocupacion = ocupacion;
    this.estadoCivil = estadoCivil;
  }

}

export class Estudio {
  public nombreInstituto: string;
  public lugarGrado: string;
  public anio: Date;

  constructor(nombreInstituto: string, lugarGrado: string, anio: Date) {
    this.nombreInstituto = nombreInstituto;
    this.lugarGrado = lugarGrado;
    this.anio = anio;
  }
}

import { Estudio } from "./estudio/estudio";
import { Laboral } from "./laboral/laboral";
import { Personal } from "./personal/personal";
import { Referencia } from "./referencia/referencia";

export class Usuario {
  id: number;
  personal: Personal;
  estudio: Estudio;
  referencia: Referencia;
  laboral: Laboral;

  constructor(
    id: number,
    personal: Personal,
    estudio: Estudio,
    referencia: Referencia,
    laboral: Laboral
  ) {
    this.id = id;
    this.personal = personal;
    this.estudio = estudio;
    this.referencia = referencia;
    this.laboral = laboral;
  }
}

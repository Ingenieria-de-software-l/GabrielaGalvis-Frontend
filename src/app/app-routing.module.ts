import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioEstudioComponent } from './estudio/formulario-estudio/formulario-estudio.component';
import { FormularioLaboralComponent } from './laboral/formulario-laboral/formulario-laboral.component';
import { FormularioReferenciaComponent } from './referencia/formulario-referencia/formulario-referencia.component';
import { FormularioPersonalComponent } from './personal/formulario-personal/formulario-personal.component';
import { ListaGeneralComponent } from './lista/lista-general/lista-general.component';
import { FormularioUsuarioComponent } from './formulario-usuario/formulario-usuario.component';

const routes: Routes = [
  {path: '', component: FormularioUsuarioComponent},
  {path: 'formulario-estudio', component: FormularioEstudioComponent},
  {path: 'formulario-laboral', component: FormularioLaboralComponent},
  {path: 'formulario-referencia', component: FormularioReferenciaComponent},
  {path: 'formulario-personal', component: FormularioPersonalComponent},
  {path: 'estudio', component: FormularioEstudioComponent},
  {path: 'laboral', component: FormularioLaboralComponent},
  {path: 'referencia', component: FormularioReferenciaComponent},
  {path: 'personal', component: FormularioPersonalComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

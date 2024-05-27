import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormularioEstudioComponent } from './estudio/formulario-estudio/formulario-estudio.component';
import { FormularioLaboralComponent } from './laboral/formulario-laboral/formulario-laboral.component';
import { FormularioPersonalComponent } from './personal/formulario-personal/formulario-personal.component';
import { FormularioReferenciaComponent } from './referencia/formulario-referencia/formulario-referencia.component';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListaGeneralComponent } from './lista/lista-general/lista-general.component';
import { BienvenidaComponent } from './inicio/bienvenida/bienvenida.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioEstudioComponent,
    FormularioLaboralComponent,
    FormularioPersonalComponent,
    FormularioReferenciaComponent,
    ListaGeneralComponent,
    BienvenidaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

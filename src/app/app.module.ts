import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BarraComponent } from './Componentes/barra/barra.component';
import { FormularioComponent } from './Componentes/formulario/formulario.component';
import { ListadonoticiasComponent } from './Componentes/listadonoticias/listadonoticias.component';
import { SpinnerComponent } from './Compartido/spinner/spinner.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BarraComponent,
    FormularioComponent,
    ListadonoticiasComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

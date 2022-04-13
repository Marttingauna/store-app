import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//BrowserAnimationsModule es requerido para las animaciones
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { MeterialModule } from './material.module';
import { SalesPersonListComponent } from './sales-person-list/sales-person-list.component';

//Declaraciones de los componentes que se usaran en el modulo
//Importacion de los componentes que se usaran en el modulo
@NgModule({
  declarations: [
    AppComponent,
    SalesPersonListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MeterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

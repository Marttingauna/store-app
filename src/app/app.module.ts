import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//BrowserAnimationsModule es requerido para las animaciones
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { MeterialModule } from './material.module';
import { SalesPersonListComponent } from './sales-person-list/sales-person-list.component';
/* Modulo de cliente http para las peticiones */
import { HttpClientModule } from '@angular/common/http';
/* Servicio de productos */
import { ProductService } from './services/product.service';

//declarations: Declaraciones de los componentes que se usaran en el modulo
//imports: Importacion de los componentes que se usaran en el modulo
@NgModule({
  declarations: [
    AppComponent,
    SalesPersonListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MeterialModule,
    HttpClientModule,
  ],
  /* Referencia al servicio de producto, para poder inyectar el servicio
   * en otras partes de la aplicación*/
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

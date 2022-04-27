import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//BrowserAnimationsModule es requerido para las animaciones
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from '@angular/forms';
/* Modulo de cliente http para las peticiones */
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
/* Servicio de productos */
import { ProductService } from './services/product.service';

//Importaciones de PrimeNG
import {TableModule} from 'primeng/table';
import {MenuModule} from 'primeng/menu';
import { AppRoutingModule } from './app-routing.module';
import { SignInComponent } from './components/pages/sign-in/sign-in.component';
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {ToggleButtonModule} from 'primeng/togglebutton';
import { HomeModule } from './components/pages/home/home.module';
import { NavbarModule } from './components/navbar/navbar.module';
import { ProductListModule } from './components/pages/product-list/product-list.module';

//declarations: Declaraciones de los componentes que se usaran en el modulo
//imports: Importacion de los componentes que se usaran en el modulo
@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
  ],
  imports: [
    BrowserModule,//Modulo de navegacion
    BrowserAnimationsModule, //Modulo de animaciones
    HttpClientModule, //Modulo de cliente http para las peticiones
    AppRoutingModule,//Modulo de rutas
    
    //Modulos creados
    HomeModule,
    NavbarModule,
    ProductListModule,
    
  ],
  /* Referencia al servicio de producto, para poder inyectar el servicio
   * en otras partes de la aplicación*/
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

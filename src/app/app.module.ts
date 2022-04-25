import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//BrowserAnimationsModule es requerido para las animaciones
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
/* Modulo de cliente http para las peticiones */
import { HttpClientModule } from '@angular/common/http';
/* Servicio de productos */
import { ProductService } from './services/product.service';
//Angular material
// import { SalesPersonListComponent } from './sales-person-list/sales-person-list.component';
import { ProductListComponent } from './components/pages/product-list/product-list.component';
import { MenuComponent } from './components/pages/menu/menu.component';

//Importaciones de PrimeNG
import {TableModule} from 'primeng/table';
import {MenuModule} from 'primeng/menu';
import { AppRoutingModule } from './app-routing.module';
import { SignInComponent } from './components/pages/sign-in/sign-in.component';
import {InputTextModule} from 'primeng/inputtext';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';


//declarations: Declaraciones de los componentes que se usaran en el modulo
//imports: Importacion de los componentes que se usaran en el modulo
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    MenuComponent,
    NavMenuComponent,
    SignInComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TableModule,
    MenuModule,
    InputTextModule,

  ],
  /* Referencia al servicio de producto, para poder inyectar el servicio
   * en otras partes de la aplicación*/
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

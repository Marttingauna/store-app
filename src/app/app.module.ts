import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//BrowserAnimationsModule es requerido para las animaciones
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// import { ToastrModule } from 'ngx-toastr';

import { FormsModule } from '@angular/forms';
/* Modulo de cliente http para las peticiones */
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { interceptorProvider } from './interceptors/prod-interceptor.service';
/* Servicio de productos */
import { ProductService } from './services/product.service';


import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './pages/home/home.module';
import { ProductListModule } from './pages/product/product-list.module';
import { NavMenuComponent } from './common/components/navbar/nav-menu/nav-menu.component';
import { LoginComponent } from './pages/login/components/login/login.component';
import { RegisterComponent } from './pages/login/components/register/register.component';


//declarations: Declaraciones de los componentes que se usaran en el modulo
//imports: Importacion de los componentes que se usaran en el modulo
@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,//Modulo de navegacion
    HttpClientModule, //Modulo de cliente http para las peticiones
    AppRoutingModule,//Modulo de rutas
    FormsModule,//Modulo de formularios

    BrowserAnimationsModule, //Modulo de animaciones
    // ToastrModule.forRoot(), // ToastrModule notificaciones

    //Modulos creados
    HomeModule,
    
  ],
  /* Referencia al servicio de producto, para poder inyectar el servicio
   * en otras partes de la aplicación*/
  providers: [ProductService, interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }

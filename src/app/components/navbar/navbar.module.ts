import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    NavMenuComponent
  ],
  exports:[
    NavMenuComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,

  ]
})
export class NavbarModule { }

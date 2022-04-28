import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductlistPageComponent } from './productlist-page/productlist-page.component';
import { MenuSidebarComponent } from './menu-sidebar/menu-sidebar.component';


import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';

import { ProductListComponent } from './product-list-grid/product-list-grid.component';
import { ToggleButtonModule } from 'primeng/togglebutton';




@NgModule({
  declarations: [
    ProductlistPageComponent,
    MenuSidebarComponent,
    ProductListComponent
  ],
  exports:[
    ProductlistPageComponent,
  ],
  imports: [
    CommonModule,
    MenuModule,
    ButtonModule,
    ToggleButtonModule,
    FormsModule,
    ChipModule
  ]
})
export class ProductListModule { }

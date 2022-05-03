import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductlistPageComponent } from './productlist-page/productlist-page.component';
import { MenuSidebarComponent } from './menu-sidebar/menu-sidebar.component';



import { ProductListComponent } from './product-list-grid/product-list-grid.component';
import { MaterialModule } from 'src/app/common/material/material.module';




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
    MaterialModule,
    FormsModule,
  ]
})
export class ProductListModule { }

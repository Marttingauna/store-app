import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';




import { MaterialModule } from 'src/app/common/material/material.module';
import { ActionComponent } from './components/action/action.component';
import { SportComponent } from './components/sport/sport.component';
import { ProductListComponent } from './components/product-list-grid/product-list-grid.component';
import { ProductlistPageComponent } from './components/productlist-page/productlist-page.component';
import { MenuSidebarComponent } from './components/menu-sidebar/menu-sidebar.component';
import { ProductRoutingModule } from './product-routing.module';




@NgModule({
  declarations: [
    ProductlistPageComponent,
    MenuSidebarComponent,
    ProductListComponent,
    ActionComponent,
    SportComponent
  ],
  exports:[
    ProductlistPageComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ProductRoutingModule
  ]
})
export class ProductListModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from 'src/app/common/material/material.module';
import { ActionComponent } from './components/action/action.component';
import { ProductListComponent } from './components/product-list-grid/product-list-grid.component';
import { ProductlistPageComponent } from './components/productlist-page/productlist-page.component';
import { MenuSidebarComponent } from './components/menu/menu-sidebar/menu-sidebar.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductCategoryMenuComponent } from './components/menu/product-category-menu/product-category-menu.component';
import { SearchComponent } from './components/menu/search/search.component';



@NgModule({
  declarations: [
    ProductlistPageComponent,
    MenuSidebarComponent,
    ProductListComponent,
    ActionComponent,
    ProductCategoryMenuComponent,
    SearchComponent
  ],
  exports:[
    ProductlistPageComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ProductRoutingModule
  ]
})
export class ProductListModule { }

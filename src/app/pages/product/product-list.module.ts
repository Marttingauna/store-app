import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductListComponent } from './components/product-list-grid/product-list-grid.component';
import { ProductlistPageComponent } from './components/productlist-page/productlist-page.component';
import { MenuSidebarComponent } from './components/menu/menu-sidebar/menu-sidebar.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductCategoryMenuComponent } from './components/menu/product-category-menu/product-category-menu.component';
import { SearchComponent } from './components/menu/search/search.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';



@NgModule({
  declarations: [
    ProductlistPageComponent,
    MenuSidebarComponent,
    ProductListComponent,
    ProductCategoryMenuComponent,
    SearchComponent,
    ProductDetailsComponent
  ],
  exports:[
    ProductlistPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProductRoutingModule
  ]
})
export class ProductListModule { }

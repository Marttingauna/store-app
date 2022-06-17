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

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';

@NgModule({
  declarations: [
    ProductlistPageComponent,
    MenuSidebarComponent,
    ProductListComponent,
    ProductCategoryMenuComponent,
    SearchComponent,
    ProductDetailsComponent,
    CartStatusComponent,
    CartDetailsComponent
  ],
  exports:[
    ProductlistPageComponent,
  ],
  imports: [
    NgbModule, //Modulo de bootstrap usado para el componente de paginacion.
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProductRoutingModule
  ]
})
export class ProductListModule { }

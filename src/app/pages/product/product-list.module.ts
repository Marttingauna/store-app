import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductListComponent } from './components/product-list-grid/product-list-grid.component';
import { ProductlistPageComponent } from './components/productlist-page/productlist-page.component';
import { MenuSidebarComponent } from './components/menu/menu-sidebar/menu-sidebar.component';
import { ProductRoutingModule } from './product-routing.module';
import { SearchComponent } from './components/menu/search/search.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';

import { HttpClientModule } from '@angular/common/http';

//Ngx lib dropzone
import { NgxDropzoneModule } from 'ngx-dropzone';
@NgModule({
  declarations: [
    ProductlistPageComponent,
    MenuSidebarComponent,
    ProductListComponent,
    SearchComponent,
    ProductDetailsComponent,
    CartStatusComponent,
    CartDetailsComponent,
    NewProductComponent,
    EditProductComponent
  ],
  exports:[
    ProductlistPageComponent,
  ],
  imports: [
    NgbModule, //Modulo de bootstrap usado para el componente de paginacion.
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProductRoutingModule,
    HttpClientModule,
    NgxDropzoneModule
  ]
})
export class ProductListModule { }

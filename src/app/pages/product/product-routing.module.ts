import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductlistPageComponent } from './components/productlist-page/productlist-page.component';
import { ProductListComponent } from './components/product-list-grid/product-list-grid.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';

const routes: Routes = [
  {
    path: '',
    component: ProductlistPageComponent,
    children: [
      //Rutas hijas donde se iran agregando los componentes que se quieran mostrar
      { path: 'list', component: ProductListComponent },
      { path: 'detalle/:id', component: ProductDetailsComponent },
      { path: 'new', component: NewProductComponent },
      { path: 'editar/:id', component: EditProductComponent },

      { path: 'cart-details', component: CartDetailsComponent },
      { path: 'search/:keyword', component: ProductListComponent },
      { path: 'category/:id', component: ProductListComponent },
      { path: ':id', component: ProductDetailsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductlistPageComponent } from './components/productlist-page/productlist-page.component';
import { ProductListComponent } from './components/product-list-grid/product-list-grid.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';

import { ProdGuardService as guard } from 'src/app/guards/prod-guard.service';

const routes: Routes = [
  {
    path: '',
    component: ProductlistPageComponent,
    children: [
      //Rutas hijas donde se iran agregando los componentes que se quieran mostrar
      {
        path: 'list',
        component: ProductListComponent,
        canActivate: [guard],
        data: { expectedRol: ['admin', 'user'] },
      },
      {
        path: 'detalle/:id',
        component: ProductDetailsComponent,
        canActivate: [guard],
        data: { expectedRol: ['admin', 'user'] },
      },
      {
        path: 'new',
        component: NewProductComponent,
        canActivate: [guard],
        data: { expectedRol: ['admin'] },
      },
      {
        path: 'editar/:id',
        component: EditProductComponent,
        canActivate: [guard],
        data: { expectedRol: ['admin'] },
      },

      {
        path: 'cart-details',
        component: CartDetailsComponent,
        canActivate: [guard],
        data: { expectedRol: ['admin', 'user'] },
      },
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

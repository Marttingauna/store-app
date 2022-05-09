import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductlistPageComponent } from './components/productlist-page/productlist-page.component';
import { SportComponent } from './components/sport/sport.component';
import { ProductListComponent } from './components/product-list-grid/product-list-grid.component';

const routes: Routes = [
    {
        path: '',
        component: ProductlistPageComponent,
        children: [
            //Rutas hijas donde se iran agregando los componentes que se quieran mostrar
            { path: 'list', component: ProductListComponent },
            { path: 'category/:id', component: ProductListComponent },
        ],
    },
    { path: '**', redirectTo: 'home' },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProductRoutingModule {}

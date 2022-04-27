import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/pages/home/home-page/home-page.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { ProductListComponent } from './components/pages/product-list/product-list-grid.component';
import { SignInComponent } from './components/pages/sign-in/sign-in.component';
import { ViewProductsComponent } from './components/pages/view-products/view-products.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch:'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
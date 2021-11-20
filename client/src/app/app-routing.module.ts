import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/customer/home-page/home-page.module').then(m => m.HomePageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./pages/customer/products-page/products-page.module').then(m => m.ProductsPageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./pages/customer/sign-in-page/sign-in-page.module').then(m => m.SignInPageModule)
  },
  {
    path: 'shopping-cart',
    loadChildren: () => import('./pages/customer/shopping-cart-page/shopping-cart-page.module').then(m => m.ShoppingCartPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin-pages.module').then(m => m.AdminPagesModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/customer/not-found-page/not-found-page.module').then(m => m.NotFoundPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

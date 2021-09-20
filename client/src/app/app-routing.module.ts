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
    loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./pages/products-page/products-page.module').then(m => m.ProductsPageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./pages/sign-in-page/sign-in-page.module').then(m => m.SignInPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/not-found-page/not-found-page.module').then(m => m.NotFoundPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

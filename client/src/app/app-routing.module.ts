import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    loadChildren: () => import('./pages/products-page/products-page.module').then(m => m.ProductsPageModule)
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

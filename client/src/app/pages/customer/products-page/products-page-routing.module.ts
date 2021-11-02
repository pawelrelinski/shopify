import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsPageComponent} from './products-page.component';


const routes: Routes = [
  {
    path: '',
    component: ProductsPageComponent
  },
  {
    path: ':productId',
    loadChildren: () => import('../product-overview-page/product-overview-page.module').then(m => m.ProductOverviewPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsPageRoutingModule {
}

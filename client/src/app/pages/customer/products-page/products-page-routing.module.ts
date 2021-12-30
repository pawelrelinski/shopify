import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsPageComponent } from './products-page.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsPageComponent,
  },
  {
    path: ':category',
    loadChildren: () =>
      import('./subpages/products-category-page/products-category-page.module').then(
        (m) => m.ProductsCategoryPageModule
      ),
  },
  {
    path: ':category/:productId',
    loadChildren: () =>
      import('./subpages/product-overview-page/product-overview-page.module').then(
        (m) => m.ProductOverviewPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsPageRoutingModule {}

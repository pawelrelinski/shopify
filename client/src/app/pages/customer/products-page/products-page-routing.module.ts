import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./subpages/products-category-page/products-category-page.module').then(
        (m) => m.ProductsCategoryPageModule
      ),
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

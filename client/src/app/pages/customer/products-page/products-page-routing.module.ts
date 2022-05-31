import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import(
        '@pages/customer/products-page/subpages/products-category-page/products-category-page.component'
      ).then((c) => c.ProductsCategoryPageComponent),
  },
  {
    path: ':category',
    loadComponent: () =>
      import(
        '@pages/customer/products-page/subpages/products-category-page/products-category-page.component'
      ).then((c) => c.ProductsCategoryPageComponent),
  },
  {
    path: ':category/:productId',
    loadComponent: () =>
      import(
        '@pages/customer/products-page/subpages/product-overview-page/product-overview-page.component'
      ).then((c) => c.ProductOverviewPageComponent),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsPageRoutingModule {}

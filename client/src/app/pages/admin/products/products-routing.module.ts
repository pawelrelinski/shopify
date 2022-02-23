import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'manage',
    loadChildren: () =>
      import('./products-manage/products-manage.module').then((m) => m.ProductsManageModule),
  },
  {
    path: 'create',
    loadChildren: () =>
      import('./create-product/create-product.module').then((m) => m.CreateProductModule),
  },
  {
    path: 'edit',
    loadChildren: () =>
      import('./edit-product/edit-product.module').then((m) => m.EditProductModule),
  },
  {
    path: 'details',
    loadChildren: () =>
      import('./product-details/product-details.module').then((m) => m.ProductDetailsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'manage',
    loadChildren: () =>
      import('@pages/admin/products/products-manage/products-manage.module').then(
        (m) => m.ProductsManageModule
      ),
  },
  {
    path: 'create',
    loadComponent: () =>
      import('@pages/admin/products/create-product/create-product.component').then(
        (c) => c.CreateProductComponent
      ),
  },
  {
    path: 'edit/:productId',
    loadComponent: () =>
      import('@pages/admin/products/edit-product/edit-product.component').then(
        (c) => c.EditProductComponent
      ),
  },
  {
    path: 'details/:productId',
    loadComponent: () =>
      import('@pages/admin/products/product-details/product-details.component').then(
        (c) => c.ProductDetailsComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}

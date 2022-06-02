import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsManageComponent } from './products-manage.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsManageComponent,
  },
  {
    path: 'details',
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
export class ProductsManageRoutingModule {}

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
    loadChildren: () =>
      import('../product-details/product-details.module').then((m) => m.ProductDetailsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsManageRoutingModule {}

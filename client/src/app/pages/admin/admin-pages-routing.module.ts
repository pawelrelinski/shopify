import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'products-manage',
    loadChildren: () =>
      import('./products-manage/products-manage.module').then((m) => m.ProductsManageModule),
  },
  {
    path: 'customers-manage',
    loadChildren: () =>
      import('./customers-manage/customers-manage.module').then((m) => m.CustomersManageModule),
  },
  {
    path: 'orders-manage',
    loadChildren: () =>
      import('./orders-manage/orders-manage.module').then((m) => m.OrdersManageModule),
  },
  {
    path: 'create-product',
    loadChildren: () =>
      import('./create-product/create-product.module').then((m) => m.CreateProductModule),
  },
  {
    path: 'edit-product',
    loadChildren: () =>
      import('./edit-product/edit-product.module').then((m) => m.EditProductModule),
  },
  {
    path: 'categories',
    loadChildren: () => import('./categories/categories.module').then((m) => m.CategoriesModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPagesRoutingModule {}

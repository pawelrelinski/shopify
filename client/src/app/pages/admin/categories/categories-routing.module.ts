import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'manage',
  },
  {
    path: 'manage',
    loadComponent: () =>
      import('@pages/admin/categories/categories-manage/categories-manage.component').then(
        (c) => c.CategoriesManageComponent
      ),
  },
  {
    path: 'details/:id',
    loadComponent: () =>
      import('@pages/admin/categories/category-details/category-details.component').then(
        (c) => c.CategoryDetailsComponent
      ),
  },
  {
    path: 'stats',
    loadComponent: () =>
      import('@pages/admin/categories/categories-stats/categories-stats.component').then(
        (c) => c.CategoriesStatsComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriesRoutingModule {}

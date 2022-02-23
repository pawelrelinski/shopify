import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'manage',
  },
  {
    path: 'manage',
    loadChildren: () =>
      import('./categories-manage/categories-manage.module').then((m) => m.CategoriesManageModule),
  },
  {
    path: 'details',
    loadChildren: () =>
      import('./category-details/category-details.module').then((m) => m.CategoryDetailsModule),
  },
  {
    path: 'stats',
    loadChildren: () =>
      import('./categories-stats/categories-stats.module').then((m) => m.CategoriesStatsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriesRoutingModule {}

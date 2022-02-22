import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesStatsComponent } from './categories-stats.component';

const routes: Routes = [
  {
    path: '',
    component: CategoriesStatsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriesStatsRoutingModule {}

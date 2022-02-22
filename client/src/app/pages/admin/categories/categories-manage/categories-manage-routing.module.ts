import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesManageComponent } from './categories-manage.component';

const routes: Routes = [
  {
    path: '',
    component: CategoriesManageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriesManageRoutingModule {}

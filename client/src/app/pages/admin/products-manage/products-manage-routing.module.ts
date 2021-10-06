import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsManageComponent} from './products-manage.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsManageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsManageRoutingModule { }

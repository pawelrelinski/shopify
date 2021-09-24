import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductOverviewPageComponent} from './product-overview-page.component';

const routes: Routes = [
  {
    path: ':id',
    component: ProductOverviewPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductOverviewPageRoutingModule { }

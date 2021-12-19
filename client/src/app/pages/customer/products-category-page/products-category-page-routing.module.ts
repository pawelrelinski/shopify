import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsCategoryPageComponent } from './products-category-page.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsCategoryPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsCategoryPageRoutingModule {}

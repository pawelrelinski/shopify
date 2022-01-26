import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersManageComponent } from './customers-manage.component';

const routes: Routes = [
  {
    path: '',
    component: CustomersManageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomersManageRoutingModule {}

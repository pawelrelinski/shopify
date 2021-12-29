import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileOrdersPageComponent } from './profile-orders-page.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileOrdersPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileOrdersPageRoutingModule {}

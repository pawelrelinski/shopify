import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePageComponent } from './profile-page.component';

const routes: Routes = [
  {
    path: '',
    component: ProfilePageComponent,
  },
  {
    path: 'orders',
    loadComponent: () =>
      import(
        '@pages/customer/profile-page/subpages/profile-orders-page/profile-orders-page.component'
      ).then((c) => c.ProfileOrdersPageComponent),
  },
  {
    path: 'favourites',
    loadComponent: () =>
      import(
        '@pages/customer/profile-page/subpages/profile-favourites-page/profile-favourites-page.component'
      ).then((c) => c.ProfileFavouritesPageComponent),
  },
  {
    path: 'settings',
    loadComponent: () =>
      import(
        '@pages/customer/profile-page/subpages/profile-settings-page/profile-settings-page.component'
      ).then((c) => c.ProfileSettingsPageComponent),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePageRoutingModule {}

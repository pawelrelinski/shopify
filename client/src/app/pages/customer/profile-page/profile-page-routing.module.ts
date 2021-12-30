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
    loadChildren: () =>
      import('./subpages/profile-orders-page/profile-orders-page.module').then(
        (m) => m.ProfileOrdersPageModule
      ),
  },
  {
    path: 'favourites',
    loadChildren: () =>
      import('./subpages/profile-favourites-page/profile-favourites-page.module').then(
        (m) => m.ProfileFavouritesPageModule
      ),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./subpages/profile-settings-page/profile-settings-page.module').then(
        (m) => m.ProfileSettingsPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePageRoutingModule {}

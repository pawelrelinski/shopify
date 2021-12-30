import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileFavouritesPageComponent } from './profile-favourites-page.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileFavouritesPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileFavouritesPageRoutingModule {}

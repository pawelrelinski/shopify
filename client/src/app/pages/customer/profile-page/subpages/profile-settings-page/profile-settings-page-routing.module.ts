import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileSettingsPageComponent } from './profile-settings-page.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileSettingsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileSettingsPageRoutingModule {}

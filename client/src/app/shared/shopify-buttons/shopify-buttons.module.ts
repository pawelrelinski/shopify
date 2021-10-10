import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PreviousPageComponent} from '@shared/shopify-buttons/components';
import {SwitchButtonComponent} from '@shared/shopify-buttons/components';


@NgModule({
  declarations: [
    PreviousPageComponent,
    SwitchButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PreviousPageComponent,
    SwitchButtonComponent
  ]
})
export class ShopifyButtonsModule { }

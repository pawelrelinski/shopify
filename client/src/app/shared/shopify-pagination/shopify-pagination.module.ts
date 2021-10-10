import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PaginationComponent} from '@shared/shopify-pagination/components';


@NgModule({
  declarations: [
    PaginationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PaginationComponent
  ]
})
export class ShopifyPaginationModule { }

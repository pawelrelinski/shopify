import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShopifyFooterComponent} from './components/shopify-footer/shopify-footer.component';



@NgModule({
  declarations: [
    ShopifyFooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ShopifyFooterComponent]
})
export class ShopifyFooterModule { }

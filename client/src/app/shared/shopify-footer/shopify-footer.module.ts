import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopifyFooterComponent } from './components/shopify-footer/shopify-footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [ShopifyFooterComponent],
	imports: [CommonModule, RouterModule],
	exports: [ShopifyFooterComponent],
})
export class ShopifyFooterModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from '@features/layout/layout.module';
import { CoreModule } from '@core/core.module';
import { ShopifyFooterModule } from '@shared/shopify-footer/shopify-footer.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		HttpClientModule,
		CoreModule,
		AppRoutingModule,
		LayoutModule,
		ShopifyFooterModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}

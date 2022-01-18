import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from '@features/layout/layout.module';
import { CoreModule } from '@core/core.module';
import { ShopifyFooterModule } from '@shared/shopify-footer/shopify-footer.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DirectivesModule } from '@core/directives/directives.module';
import { NotificationModule } from '@features/notification/notification.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    AppRoutingModule,
    DirectivesModule,
    LayoutModule,
    ShopifyFooterModule,
    NotificationModule,
  ],
  providers: [
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'PLN',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

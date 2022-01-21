import { DEFAULT_CURRENCY_CODE, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '@core/interceptors/auth.interceptor';

@NgModule({
  imports: [CommonModule],
  providers: [
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'PLN',
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'Core module has already been loaded. Import the core modules in AppModule only.'
      );
    }
  }
}

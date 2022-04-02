import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponseErrorListComponent } from './components/response-error-list/response-error-list.component';

@NgModule({
  declarations: [ResponseErrorListComponent],
  imports: [CommonModule],
  exports: [ResponseErrorListComponent],
})
export class ShopifyErrorModule {}

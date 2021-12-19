import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaqPageRoutingModule } from './faq-page-routing.module';
import { FaqPageComponent } from './faq-page.component';
import { FaqModule } from '@features/faq/faq.module';

@NgModule({
	declarations: [FaqPageComponent],
	imports: [CommonModule, FaqPageRoutingModule, FaqModule],
})
export class FaqPageModule {}

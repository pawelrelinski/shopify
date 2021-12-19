import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqListComponent } from '@features/faq/components';
import { FaqListElementComponent } from '@features/faq/components';

@NgModule({
	declarations: [FaqListComponent, FaqListElementComponent],
	imports: [CommonModule],
	exports: [FaqListComponent],
})
export class FaqModule {}

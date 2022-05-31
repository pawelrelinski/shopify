import { Component } from '@angular/core';
import { FaqModule } from '@features/faq/faq.module';

@Component({
  selector: 'shopify-faq-page',
  templateUrl: './faq-page.component.html',
  standalone: true,
  imports: [FaqModule],
})
export class FaqPageComponent {}

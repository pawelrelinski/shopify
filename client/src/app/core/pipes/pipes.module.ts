import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TruncatePipe } from '@core/pipes/truncate/truncate.pipe';
import { FirstLetterTitleCasePipe } from './first-letter-title-case/first-letter-title-case.pipe';

@NgModule({
  declarations: [TruncatePipe, FirstLetterTitleCasePipe],
  exports: [TruncatePipe, FirstLetterTitleCasePipe],
  imports: [CommonModule],
})
export class PipesModule {}

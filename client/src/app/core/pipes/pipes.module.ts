import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TruncatePipe } from '@core/pipes/truncate/truncate.pipe';

@NgModule({
	declarations: [TruncatePipe],
	exports: [TruncatePipe],
	imports: [CommonModule],
})
export class PipesModule {}

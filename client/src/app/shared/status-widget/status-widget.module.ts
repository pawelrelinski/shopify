import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  StatusWidgetDangerComponent,
  StatusWidgetNeutralComponent,
  StatusWidgetSuccessComponent,
  StatusWidgetWarningComponent,
} from '@shared/status-widget/components';

@NgModule({
  declarations: [
    StatusWidgetSuccessComponent,
    StatusWidgetDangerComponent,
    StatusWidgetNeutralComponent,
    StatusWidgetWarningComponent,
  ],
  imports: [CommonModule],
  exports: [
    StatusWidgetSuccessComponent,
    StatusWidgetDangerComponent,
    StatusWidgetNeutralComponent,
    StatusWidgetWarningComponent,
  ],
})
export class StatusWidgetModule {}

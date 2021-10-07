import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StatusWidgetSuccessComponent} from '@shared/status-widget/components';
import {StatusWidgetDangerComponent} from '@shared/status-widget/components';
import {StatusWidgetNeutralComponent} from '@shared/status-widget/components';
import {StatusWidgetWarningComponent} from '@shared/status-widget/components';


@NgModule({
  declarations: [
    StatusWidgetSuccessComponent,
    StatusWidgetDangerComponent,
    StatusWidgetNeutralComponent,
    StatusWidgetWarningComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StatusWidgetSuccessComponent,
    StatusWidgetDangerComponent,
    StatusWidgetNeutralComponent,
    StatusWidgetWarningComponent
  ]
})
export class StatusWidgetModule { }

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StatusWidgetSuccessComponent} from '@shared/status-widget/components';
import {StatusWidgetErrorComponent} from '@shared/status-widget/components';
import {StatusWidgetNeutralComponent} from '@shared/status-widget/components';


@NgModule({
  declarations: [
    StatusWidgetSuccessComponent,
    StatusWidgetErrorComponent,
    StatusWidgetNeutralComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StatusWidgetSuccessComponent,
    StatusWidgetErrorComponent,
    StatusWidgetNeutralComponent
  ]
})
export class StatusWidgetModule { }

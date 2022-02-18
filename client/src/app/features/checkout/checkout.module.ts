import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import {
  CheckoutComponent,
  CheckoutFormComponent,
  CheckoutItemsListComponent,
  CheckoutItemsListElementComponent,
  CheckoutSummaryComponent,
} from '@features/checkout/components';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { PipesModule } from '@core/pipes/pipes.module';

@NgModule({
  declarations: [
    CheckoutComponent,
    CheckoutSummaryComponent,
    CheckoutItemsListComponent,
    CheckoutFormComponent,
    CheckoutItemsListElementComponent,
  ],
  imports: [
    CommonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    RouterModule,
  ],
  exports: [CheckoutFormComponent, CheckoutComponent],
})
export class CheckoutModule {}

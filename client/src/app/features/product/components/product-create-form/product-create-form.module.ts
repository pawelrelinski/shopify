import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCreateFormComponent } from './product-create-form/product-create-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from '@core/pipes/pipes.module';
import { RouterModule } from '@angular/router';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { ProductCreateFormGroupGeneralComponent } from './product-create-form-group-general/product-create-form-group-general.component';
import { ProductCreateFormGroupInventoryComponent } from './product-create-form-group-inventory/product-create-form-group-inventory.component';
import { ProductCreateFormGroupShippingComponent } from './product-create-form-group-shipping/product-create-form-group-shipping.component';
import { ProductCreateFormGroupVariationsComponent } from './product-create-form-group-variations/product-create-form-group-variations.component';
import { ProductCreateFormGroupSpecificationComponent } from './product-create-form-group-specification/product-create-form-group-specification.component';

@NgModule({
  declarations: [
    ProductCreateFormGroupGeneralComponent,
    ProductCreateFormGroupInventoryComponent,
    ProductCreateFormGroupShippingComponent,
    ProductCreateFormGroupVariationsComponent,
    ProductCreateFormGroupSpecificationComponent,
    ProductCreateFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
    RouterModule,
    AngularEditorModule,
  ],
  exports: [ProductCreateFormComponent],
})
export class ProductCreateFormModule {}

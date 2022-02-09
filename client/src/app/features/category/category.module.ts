import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CategoryCountWidgetComponent, CategoryTableModule } from '@features/category/components';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CategoryCountWidgetComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    CategoryTableModule,
    MatProgressSpinnerModule,
  ],
  exports: [CategoryCountWidgetComponent, CategoryTableModule],
})
export class CategoryModule {}

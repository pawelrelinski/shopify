import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryTableComponent } from './category-table/category-table.component';
import { CategoryTableRowComponent } from './category-table-row/category-table-row.component';
import { PipesModule } from '@core/pipes/pipes.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CategoryTableComponent, CategoryTableRowComponent],
  imports: [CommonModule, PipesModule, RouterModule],
  exports: [CategoryTableComponent],
})
export class CategoryTableModule {}

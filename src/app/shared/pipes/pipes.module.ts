import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesSearchPipe } from './employees-search.pipe';
import { GenderPipe } from './gender.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [EmployeesSearchPipe, GenderPipe],
  exports: [EmployeesSearchPipe, GenderPipe]
})
export class PipesModule {}

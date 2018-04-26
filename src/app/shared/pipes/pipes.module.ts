import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesSearchPipe } from './employees-search/employees-search.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [EmployeesSearchPipe],
  exports: [EmployeesSearchPipe]
})
export class PipesModule {}

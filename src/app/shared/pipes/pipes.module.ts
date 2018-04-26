import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesSearchPipe } from './employees-search.pipe';
import { GenderPipe } from './gender.pipe';
import { RacePipe } from './race.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [EmployeesSearchPipe, GenderPipe, RacePipe],
  exports: [EmployeesSearchPipe, GenderPipe, RacePipe]
})
export class PipesModule {}

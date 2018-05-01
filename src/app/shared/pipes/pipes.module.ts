import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesSearchPipe } from './employees-search.pipe';
import { GenderPipe } from './gender.pipe';
import { RacePipe } from './race.pipe';
import { ReviewPipe } from './review.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [EmployeesSearchPipe, GenderPipe, RacePipe, ReviewPipe],
  exports: [EmployeesSearchPipe, GenderPipe, RacePipe, ReviewPipe]
})
export class PipesModule {}

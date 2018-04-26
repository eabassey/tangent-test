import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EmployeesComponent } from './employees.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PipesModule } from '../../shared/pipes/pipes.module';

@NgModule({
  declarations: [EmployeesComponent, EmployeesListComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgbModule.forRoot(),
    PipesModule
  ]
})
export class EmployeesModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees.component';
import { EmployeesRoutingModule } from './employees.routing';
import { EmployeesListComponent } from './employees-list/employees-list.component';

@NgModule({
  declarations: [EmployeesComponent, EmployeesListComponent],
  imports: [CommonModule, EmployeesRoutingModule]
})
export class EmployeesModule {}

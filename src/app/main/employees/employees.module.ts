import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';

@NgModule({
  declarations: [EmployeesComponent, EmployeesListComponent],
  imports: [CommonModule, RouterModule]
})
export class EmployeesModule {}

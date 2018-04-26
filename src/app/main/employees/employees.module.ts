import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EmployeesComponent } from './employees.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';

@NgModule({
  declarations: [EmployeesComponent, EmployeesListComponent],
  imports: [CommonModule, RouterModule, FormsModule]
})
export class EmployeesModule {}

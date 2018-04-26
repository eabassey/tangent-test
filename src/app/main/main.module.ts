import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main.routing';

import { MainComponent } from './main.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { EmployeesModule } from './employees/employees.module';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, MainRoutingModule, DashboardModule, EmployeesModule]
})
export class MainModule {}

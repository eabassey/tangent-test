import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, NgxChartsModule, PerfectScrollbarModule]
})
export class DashboardModule {}

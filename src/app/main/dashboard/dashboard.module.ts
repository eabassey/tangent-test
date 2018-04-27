import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { TopPanelComponent } from './top-panel/top-panel.component';

@NgModule({
  declarations: [DashboardComponent, TopPanelComponent],
  imports: [CommonModule, NgxChartsModule, PerfectScrollbarModule]
})
export class DashboardModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { TopPanelComponent } from './top-panel/top-panel.component';
import { BottomPanelComponent } from './bottom-panel/bottom-panel.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TopPanelEffects } from './store/effects/top-panel.effects';
import { reducers } from './store/reducers';

@NgModule({
  declarations: [DashboardComponent, TopPanelComponent, BottomPanelComponent],
  imports: [
    CommonModule,
    NgxChartsModule,
    PerfectScrollbarModule,
    StoreModule.forFeature('dashboard', reducers),
    EffectsModule.forFeature([TopPanelEffects])
  ]
})
export class DashboardModule {}

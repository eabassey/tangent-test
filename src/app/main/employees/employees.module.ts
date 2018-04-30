import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeesComponent } from './employees.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { EmployeesService } from './services/employees.service';
import { HttpClientModule } from '@angular/common/http';
import { delay } from 'rxjs/operators';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/reducers';
import { EmployeesEffects } from './store/effects/employees.effects';

@NgModule({
  declarations: [EmployeesComponent, EmployeesListComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    StoreModule.forFeature('employees', reducers),
    EffectsModule.forFeature([EmployeesEffects]),
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    NgxPaginationModule,
    PipesModule
  ],
  providers: [EmployeesService]
})
export class EmployeesModule {}

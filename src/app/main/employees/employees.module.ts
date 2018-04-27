import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EmployeesComponent } from './employees.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { EmployeesService } from './services/employees.service';
import { HttpClientModule } from '@angular/common/http';
import { delay } from 'rxjs/operators';

@NgModule({
  declarations: [EmployeesComponent, EmployeesListComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NgxPaginationModule,
    PipesModule
  ],
  providers: [EmployeesService]
})
export class EmployeesModule {
  constructor(private emp: EmployeesService) {
    this.emp
      .getEmployees()
      .pipe(delay(3000))
      .subscribe(console.log);
  }
}

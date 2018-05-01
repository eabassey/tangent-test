import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as employeesActions from '../../../employees/store/actions/employees.actions';
import * as topPanelActions from '../actions/top-panel.actions';
import { map } from 'rxjs/operators';

@Injectable()
export class TopPanelEffects {
  constructor(private actions: Actions) {}

  @Effect()
  allEmployees$ = this.actions
    .ofType(employeesActions.GET_EMPLOYEES_SUCCESS)
    .pipe(
      map((action: employeesActions.GetEmployeesSuccess) => {
        const allEmployees = action.payload;
        return allEmployees;
      }),
      map(employees => new topPanelActions.AllEmployees(employees))
    );

  @Effect()
  staffEmployees$ = this.actions
    .ofType(employeesActions.GET_EMPLOYEES_SUCCESS)
    .pipe(
      map((action: employeesActions.GetEmployeesSuccess) => {
        const staffEmployees = action.payload.filter(
          emp => emp.user.is_active === true
        );
        return staffEmployees;
      }),
      map(staffEmployees => new topPanelActions.StaffEmployees(staffEmployees))
    );

  @Effect()
  birthdayEmployees$ = this.actions
    .ofType(employeesActions.GET_EMPLOYEES_SUCCESS)
    .pipe(
      map((action: employeesActions.GetEmployeesSuccess) => {
        const employeesWithBirthdayThisMonth = action.payload.filter(
          emp => new Date(emp.birth_date).getMonth() === new Date().getMonth()
        );
        return employeesWithBirthdayThisMonth;
      }),
      map(employees => new topPanelActions.BirthdayEmployees(employees))
    );
}

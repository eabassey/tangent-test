import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import * as fromActions from '../actions/employees.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { EmployeesService } from '../../services/employees.service';

@Injectable()
export class EmployeesEffects {
  constructor(
    private actions: Actions,
    private employeesService: EmployeesService
  ) {}

  @Effect()
  getEmployees$ = this.actions.ofType(fromActions.GET_EMPLOYEES).pipe(
    switchMap(action => {
      return this.employeesService.getEmployees();
    }),
    map(employees => new fromActions.GetEmployeesSuccess(employees)),
    catchError(error => of(new fromActions.GetEmployeesFail(error)))
  );
}

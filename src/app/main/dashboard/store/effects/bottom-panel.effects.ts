import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as bottomPanelActions from '../actions/bottom-panel.actions';
import * as employeesActions from '../../../employees/store/actions/employees.actions';
import {
  map,
  groupBy,
  switchMap,
  tap,
  mergeMap,
  toArray,
  reduce
} from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { from } from 'rxjs/observable/from';

@Injectable()
export class BottomPanelEffects {
  constructor(private actions: Actions) {}

  @Effect()
  employeesByRace$ = this.actions
    .ofType(employeesActions.GET_EMPLOYEES_SUCCESS)
    .pipe(
      switchMap((action: employeesActions.GetEmployeesSuccess) => {
        return from(action.payload).pipe(
          groupBy((emp: any) => emp.race),
          mergeMap(group$ =>
            group$.pipe(reduce((acc, cur) => [...acc, cur], []))
          ),
          toArray()
        );
      }),
      map(vals => {
        const counts = [];
        let values = {};
        vals.forEach(arr => {
          counts.push({ name: arr[0].race, value: arr.length });
          values = { ...values, [arr[0].race]: arr };
        });
        return { counts, values };
      }),
      map(obj => new bottomPanelActions.EmployeesByRace(obj))
    );
}

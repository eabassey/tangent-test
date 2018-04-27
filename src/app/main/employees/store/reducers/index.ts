import { ActionReducerMap } from '@ngrx/store';
import * as fromEmployees from './employees.reducer';

export interface EmployeesState {
  collection: fromEmployees.State;
}

export const reducers: ActionReducerMap<EmployeesState> = {
  collection: fromEmployees.reducer
};

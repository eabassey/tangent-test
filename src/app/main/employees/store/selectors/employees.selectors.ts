import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EmployeesState } from '../reducers';

const employeesFeatureState = createFeatureSelector<EmployeesState>(
  'employees'
);

const employeesCollectionState = createSelector(
  employeesFeatureState,
  state => state.collection
);

export const getEmployees = createSelector(
  employeesCollectionState,
  state => state.list
);

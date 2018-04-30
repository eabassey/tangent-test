import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DashboardState } from '../reducers';

const dashboardFeatureState = createFeatureSelector<DashboardState>(
  'dashboard'
);

const topPanelState = createSelector(
  dashboardFeatureState,
  state => state.topPanel
);

export const geAlltEmployees = createSelector(
  topPanelState,
  state => state.allEmployees
);

export const geAllEmployeesCount = createSelector(
  topPanelState,
  state => state.countOfAllEmployees
);

export const geStaffEmployeesCount = createSelector(
  topPanelState,
  state => state.countOfStaffEmployees
);

export const geBirthdayEmployeesCount = createSelector(
  topPanelState,
  state => state.numberOfBirthdaysThisMonth
);

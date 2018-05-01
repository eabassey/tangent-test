import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DashboardState } from '../reducers';

const dashboardFeatureState = createFeatureSelector<DashboardState>(
  'dashboard'
);

const bottomPanelState = createSelector(
  dashboardFeatureState,
  state => state.bottomPanel
);

export const getEmployeesByRaceCount = createSelector(
  bottomPanelState,
  state => state.employeesByRaceCount
);

export const getEmployeesByRaceValues = createSelector(
  bottomPanelState,
  state => state.employeesByRaceValues
);

export const getDrillThroughFromBottomPanel = createSelector(
  bottomPanelState,
  state => state.drillThroughEmployees
);

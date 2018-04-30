import * as fromTopPanel from './top-panel.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface DashboardState {
  topPanel: fromTopPanel.State;
}

export const reducers: ActionReducerMap<DashboardState> = {
  topPanel: fromTopPanel.reducer
};

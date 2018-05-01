import * as fromTopPanel from './top-panel.reducer';
import * as fromBottomPanel from './bottom-panel.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface DashboardState {
  topPanel: fromTopPanel.State;
  bottomPanel: fromBottomPanel.State;
}

export const reducers: ActionReducerMap<DashboardState> = {
  topPanel: fromTopPanel.reducer,
  bottomPanel: fromBottomPanel.reducer
};

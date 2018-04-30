import * as fromAppSettings from './app-settings.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  appSettings: fromAppSettings.State;
}

export const reducers: ActionReducerMap<AppState> = {
  appSettings: fromAppSettings.reducer
};

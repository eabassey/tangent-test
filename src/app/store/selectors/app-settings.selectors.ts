import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../reducers';

export const getAppSettings = (state: AppState) => state.appSettings;

const getTheme = (state: AppState) => state.appSettings.theme;

export const getShowMenu = (state: AppState) =>
  state.appSettings.theme.showMenu;

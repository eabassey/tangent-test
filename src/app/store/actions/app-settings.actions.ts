import { Action } from '@ngrx/store';

export const SHOW_MENU = '[App Settings] Show Menu';
export const HIDE_MENU = '[App Settings] Hide Menu';
export const SET_SKIN = '[App Settings] Set Skin';

export class ShowMenu implements Action {
  readonly type = SHOW_MENU;
}

export class HideMenu implements Action {
  readonly type = HIDE_MENU;
}

export class SetSkin implements Action {
  readonly type = SET_SKIN;
  constructor(public payload: string) {}
}

export type appSettingsActions = ShowMenu | HideMenu | SetSkin;

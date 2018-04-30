import * as appSettingsActions from '../actions/app-settings.actions';

export interface State {
  theme: { showMenu: boolean; skin: string };
}

const initialState: State = {
  theme: {
    showMenu: true,
    skin: 'grey'
  }
};

export function reducer(
  state = initialState,
  action: appSettingsActions.appSettingsActions
) {
  switch (action.type) {
    case appSettingsActions.SHOW_MENU: {
      return {
        ...state,
        theme: { ...state.theme, showMenu: true }
      };
    }
    case appSettingsActions.HIDE_MENU: {
      return {
        ...state,
        theme: { ...state.theme, showMenu: false }
      };
    }
    case appSettingsActions.SET_SKIN: {
      const skin = action.payload;
      return {
        ...state,
        theme: { ...state.theme, skin }
      };
    }
    default:
      return state;
  }
}

import * as appSettingsActions from '../actions/app-settings.actions';

export interface State {
  showMenu: boolean;
  skin: string;
}

const initialState: State = {
  showMenu: true,
  skin: 'grey'
};

export function reducer(
  state = initialState,
  action: appSettingsActions.appSettingsActions
) {
  switch (action.type) {
    case appSettingsActions.SHOW_MENU: {
      return {
        ...state,
        showMenu: true
      };
    }
    case appSettingsActions.HIDE_MENU: {
      return {
        ...state,
        showMenu: false
      };
    }
    case appSettingsActions.SET_SKIN: {
      const skin = action.payload;
      return {
        ...state,
        skin
      };
    }
    default:
      return state;
  }
}

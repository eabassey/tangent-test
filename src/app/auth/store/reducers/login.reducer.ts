import * as fromActions from '../actions/login.actions';

export interface State {
  userInfo: any;
  error: any;
}

const initialState: State = {
  userInfo: null,
  error: null
};

export function reducer(
  state = initialState,
  action: fromActions.loginActions
) {
  switch (action.type) {
    case fromActions.LOGIN_SUCCESS: {
      const userInfo = action.payload;
      return {
        ...state,
        userInfo
      };
    }
    case fromActions.LOGIN_FAIL: {
      const error = action.payload;
      return {
        ...state,
        error
      };
    }
    default:
      return state;
  }
}

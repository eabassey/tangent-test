import * as profileActions from '../actions/user-profile.actions';

export interface State {
  profile: any;
  error: any;
}

const initialState: State = {
  profile: null,
  error: null
};

export function reducer(
  state = initialState,
  action: profileActions.profileActions
) {
  switch (action.type) {
    case profileActions.GET_USER_PROFILE_SUCCESS: {
      const profile = action.payload;
      return {
        ...state,
        profile
      };
    }

    case profileActions.GET_USER_PROFILE_FAIL: {
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

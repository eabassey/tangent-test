import * as fromProfile from './user-profile.reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface UserState {
  userProfile: fromProfile.State;
}

export const reducers: ActionReducerMap<UserState> = {
  userProfile: fromProfile.reducer
};

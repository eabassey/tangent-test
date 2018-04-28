import * as fromLogin from './login.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AuthState {
  login: fromLogin.State;
}

export const reducers: ActionReducerMap<AuthState> = {
  login: fromLogin.reducer
};

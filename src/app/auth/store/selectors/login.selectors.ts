import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from '../reducers';

const authFeatureState = createFeatureSelector<AuthState>('auth');

const loginState = createSelector(authFeatureState, state => state.login);

export const getUserInfo = createSelector(loginState, state => state.userInfo);

export const getLoginError = createSelector(loginState, state => state.error);

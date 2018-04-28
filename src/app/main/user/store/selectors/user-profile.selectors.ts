import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from '../reducers';

const userFeatureState = createFeatureSelector<UserState>('user');

const userProfileState = createSelector(
  userFeatureState,
  state => state.userProfile
);

export const getUserProfile = createSelector(
  userProfileState,
  state => state.profile
);

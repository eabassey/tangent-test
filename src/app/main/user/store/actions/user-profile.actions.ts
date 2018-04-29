import { Action } from '@ngrx/store';

export const GET_USER_PROFILE = '[User] Get User Profile';
export const GET_USER_PROFILE_SUCCESS = '[User] Get User Profile Success';
export const GET_USER_PROFILE_FAIL = '[User] Get User Profile Fail';

export class GetUserProfile implements Action {
  readonly type = GET_USER_PROFILE;
}

export class GetUserProfileSuccess implements Action {
  readonly type = GET_USER_PROFILE_SUCCESS;
  constructor(public payload: any) {}
}

export class GetUserProfileFail implements Action {
  readonly type = GET_USER_PROFILE_FAIL;
  constructor(public payload: any) {}
}

export type profileActions =
  | GetUserProfile
  | GetUserProfileSuccess
  | GetUserProfileFail;

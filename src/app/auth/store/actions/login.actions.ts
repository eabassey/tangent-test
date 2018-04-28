import { Action } from '@ngrx/store';

export const LOGIN = '[Auth] Login';
export const LOGIN_SUCCESS = '[Auth] Login Success';
export const LOGIN_FAIL = '[Auth] Login Fail';

export const USE_TOKEN_TO_ACCCESS = '[Auth] Use Token To Access';

export class Login implements Action {
  readonly type = LOGIN;
  constructor(public payload: { username: string; password: string }) {}
}

export class LoginSuccess implements Action {
  readonly type = LOGIN_SUCCESS;
  constructor(public payload: any) {}
}

export class LoginFail implements Action {
  readonly type = LOGIN_FAIL;
  constructor(public payload: any) {}
}

export class UseTokenToAccess implements Action {
  readonly type = USE_TOKEN_TO_ACCCESS;
  constructor(public payload: string) {}
}

export type loginActions = Login | LoginSuccess | LoginFail | UseTokenToAccess;

import { Action } from '@ngrx/store';

export const GET_EMPLOYEES = '[Employees] Get  Employees';
export const GET_EMPLOYEES_SUCCESS = '[Employees] Get  Employees Success';
export const GET_EMPLOYEES_FAIL = '[Employees] Get  Employees Fail';

export class GetEmployees implements Action {
  readonly type = GET_EMPLOYEES;
}

export class GetEmployeesSuccess implements Action {
  readonly type = GET_EMPLOYEES_SUCCESS;
  constructor(public payload: any) {}
}

export class GetEmployeesFail implements Action {
  readonly type = GET_EMPLOYEES_FAIL;
  constructor(public payload: any) {}
}

export type employeesActions =
  | GetEmployees
  | GetEmployeesSuccess
  | GetEmployeesFail;

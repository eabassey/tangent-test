import { Action } from '@ngrx/store';

export const ALL_EMPLOYEES = '[Top Panel Dashboard] All Employees';
export const STAFF_EMPLOYEES = '[Top Panel Dashboard] Staff Employees';
export const BIRTHDAY_EMPLOYEES = '[Top Panel Dashboard] Birthday Employees';

export class AllEmployees implements Action {
  readonly type = ALL_EMPLOYEES;
  constructor(public payload: any) {}
}

export class StaffEmployees implements Action {
  readonly type = STAFF_EMPLOYEES;
  constructor(public payload: any) {}
}

export class BirthdayEmployees implements Action {
  readonly type = BIRTHDAY_EMPLOYEES;
  constructor(public payload: any) {}
}

export type topPanelActions = AllEmployees | StaffEmployees | BirthdayEmployees;

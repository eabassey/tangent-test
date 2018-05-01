import { Action } from '@ngrx/store';

export const ALL_EMPLOYEES = '[Top Panel Dashboard] All Employees';
export const STAFF_EMPLOYEES = '[Top Panel Dashboard] Staff Employees';
export const BIRTHDAY_EMPLOYEES = '[Top Panel Dashboard] Birthday Employees';

export const DRILL_TO_ALL_EMPLOYEES =
  '[Top Panel Dashboard] Drill To All Employees';
export const DRILL_TO_STAFF_EMPLOYEES =
  '[Top Panel Dashboard] Drill To Staff Employees';
export const DRILL_TO_BIRTHDAY_EMPLOYEES =
  '[Top Panel Dashboard] Drill To Birthday Employees';

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

export class DrillToAllEmployees implements Action {
  readonly type = DRILL_TO_ALL_EMPLOYEES;
}

export class DrillToStaffEmployees implements Action {
  readonly type = DRILL_TO_STAFF_EMPLOYEES;
}

export class DrillToBirthdayEmployees implements Action {
  readonly type = DRILL_TO_BIRTHDAY_EMPLOYEES;
}

export type topPanelActions =
  | AllEmployees
  | StaffEmployees
  | BirthdayEmployees
  | DrillToAllEmployees
  | DrillToBirthdayEmployees
  | DrillToStaffEmployees;

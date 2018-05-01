import { Action } from '@ngrx/store';

export const EMPLOYEES_BY_RACE = '[Bottom Panel Dashboard] Employees By Race';
export const EMPLOYEES_BY_LEVEL = '[Bottom Panel Dashboard] Employees By Level';
export const EMPLOYEES_BY_STATUS =
  '[Bottom Panel Dashboard] Employees By Status';
export const EMPLOYEES_BY_GENDER =
  '[Bottom Panel Dashboard] Employees By Gender';

export class EmployeesByRace implements Action {
  readonly type = EMPLOYEES_BY_RACE;
  constructor(public payload: { counts: any[]; values: any }) {}
}

export class EmployeesByLevel implements Action {
  readonly type = EMPLOYEES_BY_LEVEL;
}

export class EmployeesByStatus implements Action {
  readonly type = EMPLOYEES_BY_STATUS;
}

export class EmployeesByGender implements Action {
  readonly type = EMPLOYEES_BY_GENDER;
}

export type bottomPanelActions =
  | EmployeesByRace
  | EmployeesByLevel
  | EmployeesByStatus
  | EmployeesByGender;

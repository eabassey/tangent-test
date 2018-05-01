import { Action } from '@ngrx/store';

export const EMPLOYEES_BY_RACE = '[Bottom Panel Dashboard] Employees By Race';
export const EMPLOYEES_BY_LEVEL = '[Bottom Panel Dashboard] Employees By Level';
export const EMPLOYEES_BY_STATUS =
  '[Bottom Panel Dashboard] Employees By Status';
export const EMPLOYEES_BY_GENDER =
  '[Bottom Panel Dashboard] Employees By Gender';

export const DRILL_TO_EMPLOYEES_BY_RACE =
  '[Bottom Panel Dashboard] Drill To Employees By Race';
export const DRILL_TO_EMPLOYEES_BY_LEVEL =
  '[Bottom Panel Dashboard] Drill To Employees By Level';
export const DRILL_TO_EMPLOYEES_BY_STATUS =
  '[Bottom Panel Dashboard] Drill To Employees By Status';
export const DRILL_TO_EMPLOYEES_BY_GENDER =
  '[Bottom Panel Dashboard] Drill To Employees By Gender';

export class EmployeesByRace implements Action {
  readonly type = EMPLOYEES_BY_RACE;
  constructor(public payload: { counts: any[]; values: any }) {}
}

export class EmployeesByLevel implements Action {
  readonly type = EMPLOYEES_BY_LEVEL;
  constructor(public payload: { counts: any[]; values: any }) {}
}

export class EmployeesByStatus implements Action {
  readonly type = EMPLOYEES_BY_STATUS;
  constructor(public payload: { counts: any[]; values: any }) {}
}

export class EmployeesByGender implements Action {
  readonly type = EMPLOYEES_BY_GENDER;
  constructor(public payload: { counts: any[]; values: any }) {}
}

export class DrillToEmployeesByRace implements Action {
  readonly type = DRILL_TO_EMPLOYEES_BY_RACE;
  constructor(public payload: string) {}
}

export class DrillToEmployeesByLevel implements Action {
  readonly type = DRILL_TO_EMPLOYEES_BY_LEVEL;
  constructor(public payload: string) {}
}

export class DrillToEmployeesByStatus implements Action {
  readonly type = DRILL_TO_EMPLOYEES_BY_STATUS;
  constructor(public payload: string) {}
}

export class DrillToEmployeesByGender implements Action {
  readonly type = DRILL_TO_EMPLOYEES_BY_GENDER;
  constructor(public payload: string) {}
}

export type bottomPanelActions =
  | EmployeesByRace
  | EmployeesByLevel
  | EmployeesByStatus
  | EmployeesByGender
  | DrillToEmployeesByRace
  | DrillToEmployeesByLevel
  | DrillToEmployeesByStatus
  | DrillToEmployeesByGender;

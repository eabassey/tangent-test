import * as bottomPanelActions from '../actions/bottom-panel.actions';

export interface State {
  employeesByRaceCount: any[];
  employeesByRaceValues: { [id: string]: any };

  employeesByLevelCount: any[];
  employeesByLevelValues: { [id: string]: any };

  employeesByStatusCount: any[];
  employeesByStatusValues: { [id: string]: any };

  employeesByGenderCount: any[];
  employeesByGenderValues: { [id: string]: any };

  drillThroughEmployees: any;
}

const initialState: State = {
  employeesByRaceCount: [],
  employeesByRaceValues: {},

  employeesByLevelCount: [],
  employeesByLevelValues: {},

  employeesByStatusCount: [],
  employeesByStatusValues: {},

  employeesByGenderCount: [],
  employeesByGenderValues: {},

  drillThroughEmployees: []
};

export function reducer(
  state = initialState,
  action: bottomPanelActions.bottomPanelActions
): State {
  switch (action.type) {
    case bottomPanelActions.EMPLOYEES_BY_RACE: {
      const { counts, values } = action.payload;
      return {
        ...state,
        employeesByRaceCount: counts,
        employeesByRaceValues: values
      };
    }
    case bottomPanelActions.DRILL_TO_EMPLOYEES_BY_RACE: {
      const raceId = action.payload;
      const values = state.employeesByRaceValues[raceId];
      return {
        ...state,
        drillThroughEmployees: values
      };
    }
    case bottomPanelActions.EMPLOYEES_BY_LEVEL: {
      const { counts, values } = action.payload;
      return {
        ...state,
        employeesByLevelCount: counts,
        employeesByLevelValues: values
      };
    }
    case bottomPanelActions.DRILL_TO_EMPLOYEES_BY_LEVEL: {
      const levelId = action.payload;
      const values = state.employeesByLevelValues[levelId];
      return {
        ...state,
        drillThroughEmployees: values
      };
    }
    case bottomPanelActions.EMPLOYEES_BY_STATUS: {
      const { counts, values } = action.payload;
      return {
        ...state,
        employeesByStatusCount: counts,
        employeesByStatusValues: values
      };
    }
    case bottomPanelActions.DRILL_TO_EMPLOYEES_BY_STATUS: {
      const statusId = action.payload;
      const values = state.employeesByStatusValues[statusId];
      return {
        ...state,
        drillThroughEmployees: values
      };
    }
    case bottomPanelActions.EMPLOYEES_BY_GENDER: {
      const { counts, values } = action.payload;
      return {
        ...state,
        employeesByGenderCount: counts,
        employeesByGenderValues: values
      };
    }
    case bottomPanelActions.DRILL_TO_EMPLOYEES_BY_GENDER: {
      const genderId = action.payload;
      const values = state.employeesByGenderValues[genderId];
      return {
        ...state,
        drillThroughEmployees: values
      };
    }
    default:
      return state;
  }
}

import * as bottomPanelActions from '../actions/bottom-panel.actions';

export interface State {
  employeesByRaceCount: any[];
  employeesByRaceValues: { [id: string]: any };

  drillThroughEmployees: any;
}

const initialState: State = {
  employeesByRaceCount: [],
  employeesByRaceValues: {},
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
      console.log(raceId);
      const values = state.employeesByRaceValues[raceId];
      return {
        ...state,
        drillThroughEmployees: values
      };
    }
    default:
      return state;
  }
}

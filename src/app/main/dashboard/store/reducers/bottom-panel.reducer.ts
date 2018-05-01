import * as bottomPanelActions from '../actions/bottom-panel.actions';

export interface State {
  employeesByRaceCount: any[];
  employeesByRaceValues: { [id: string]: any };
}

const initialState: State = {
  employeesByRaceCount: [],
  employeesByRaceValues: {}
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
    default:
      return state;
  }
}

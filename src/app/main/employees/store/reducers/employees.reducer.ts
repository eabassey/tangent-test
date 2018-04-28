import * as employeesActions from '../actions/employees.actions';

export interface State {
  list: any[];
  error: any;
}

const initialState: State = {
  list: [],
  error: null
};

export function reducer(
  state = initialState,
  action: employeesActions.employeesActions
) {
  switch (action.type) {
    case employeesActions.GET_EMPLOYEES_SUCCESS: {
      const list = action.payload;
      return {
        ...state,
        list
      };
    }
    case employeesActions.GET_EMPLOYEES_FAIL: {
      const error = action.payload;
      return {
        ...state,
        error
      };
    }
    default:
      return state;
  }
}

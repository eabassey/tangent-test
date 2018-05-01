import * as topPanelActions from '../actions/top-panel.actions';

export interface State {
  // Supporting objects
  allEmployees: any;
  staffEmployees: any;
  employeesWithBirthdayThisMonth: any;

  // Displaying values
  countOfAllEmployees: number;
  countOfStaffEmployees: number;
  numberOfBirthdaysThisMonth: number;

  drillThroughEmployees: any;
}

const initialState: State = {
  allEmployees: [],
  staffEmployees: [],
  employeesWithBirthdayThisMonth: [],
  countOfAllEmployees: 0,
  countOfStaffEmployees: 0,
  numberOfBirthdaysThisMonth: 0,
  drillThroughEmployees: []
};

export function reducer(
  state = initialState,
  action: topPanelActions.topPanelActions
): State {
  switch (action.type) {
    case topPanelActions.ALL_EMPLOYEES: {
      const allEmployees = action.payload;
      const countOfAllEmployees = allEmployees.length;
      return {
        ...state,
        allEmployees,
        countOfAllEmployees
      };
    }
    case topPanelActions.STAFF_EMPLOYEES: {
      const staffEmployees = action.payload;
      const countOfStaffEmployees = staffEmployees.length;
      return {
        ...state,
        staffEmployees,
        countOfStaffEmployees
      };
    }
    case topPanelActions.BIRTHDAY_EMPLOYEES: {
      const employeesWithBirthdayThisMonth = action.payload;
      const numberOfBirthdaysThisMonth = employeesWithBirthdayThisMonth.length;
      return {
        ...state,
        employeesWithBirthdayThisMonth,
        numberOfBirthdaysThisMonth
      };
    }
    case topPanelActions.DRILL_TO_ALL_EMPLOYEES: {
      return {
        ...state,
        drillThroughEmployees: state.allEmployees
      };
    }
    case topPanelActions.DRILL_TO_STAFF_EMPLOYEES: {
      return {
        ...state,
        drillThroughEmployees: state.staffEmployees
      };
    }
    case topPanelActions.DRILL_TO_BIRTHDAY_EMPLOYEES: {
      return {
        ...state,
        drillThroughEmployees: state.employeesWithBirthdayThisMonth
      };
    }
    default:
      return state;
  }
}

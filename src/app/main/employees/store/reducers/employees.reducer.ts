export interface State {
  list: any[];
}

const initialState: State = {
  list: []
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

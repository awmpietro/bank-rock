import { FETCH_STATEMENT_SUCCESS, FETCH_BALANCE_SUCCESS } from "../types";

const INITIAL_STATE = { statement: [], balance: {} };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_STATEMENT_SUCCESS: {
      return { ...state, statement: action.payload };
    }
    case FETCH_BALANCE_SUCCESS: {
      return { ...state, balance: action.payload };
    }
    default:
      return state;
  }
};

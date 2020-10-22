import { DISMISS_ALERT, SPAWN_ALERT } from "../types";

const INITIAL_VALUES = {
  isError: false,
  isSuccess: false,
  message: "",
};

export default (state = INITIAL_VALUES, action) => {
  switch (action.type) {
    case SPAWN_ALERT:
      return {
        ...state,
        isError: action.payload.isError ? action.payload.isError : false,
        isSuccess: action.payload.isSuccess ? action.payload.isSuccess : false,
        message: action.payload.message,
      };
    case DISMISS_ALERT:
      return { ...state, isError: false, isSuccess: false, message: "" };
    default:
      return state;
  }
};

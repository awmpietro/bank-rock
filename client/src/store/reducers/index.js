import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import authReducer from "./authReducer";
import alertReducer from "./alertReducer";
import statementsReducer from "./statementsReducer";

export default combineReducers({
  auth: authReducer,
  alert: alertReducer,
  statements: statementsReducer,
  form: formReducer,
});

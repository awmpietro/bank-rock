import { all } from "redux-saga/effects";

import authSagas from "./auth";
import statementSagas from "./statements";

export default function* rootSaga() {
  yield all([...authSagas, ...statementSagas]);
}

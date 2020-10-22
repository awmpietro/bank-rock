import { takeLatest, call, put, fork } from "redux-saga/effects";

import {} from "./selectors";
import {
  loginSuccess,
  registerSuccess,
  logoutSuccess,
  spawnAlert,
} from "../actions";
import { LOGIN, REGISTER, LOGOUT, SESSION } from "../types";
import { login, register, logout, session } from "../apis";

function* loginSaga({ payload }) {
  try {
    const res = yield call(login, payload.credentials);
    yield put(
      loginSuccess({
        payload: res.data,
      })
    );
  } catch (error) {
    yield put(
      spawnAlert({
        isError: true,
        message: error.message,
      })
    );
  }
}

function* watchLoginSaga() {
  yield takeLatest(LOGIN, loginSaga);
}

function* registerSaga({ payload }) {
  try {
    const res = yield call(register, payload.credentials);
    yield put(
      registerSuccess({
        payload: res.data,
      })
    );
  } catch (error) {
    yield put(
      spawnAlert({
        isError: true,
        message: error.message,
      })
    );
  }
}

function* watchRegisterSaga() {
  yield takeLatest(REGISTER, registerSaga);
}

function* logoutSaga() {
  try {
    yield call(logout);
    yield put(logoutSuccess());
  } catch (error) {
    yield put(
      spawnAlert({
        isError: true,
        message: error.message,
      })
    );
  }
}

function* watchLogoutSaga() {
  yield takeLatest(LOGOUT, logoutSaga);
}

function* sessionSaga({ payload }) {
  try {
    const res = yield call(session);
    yield put(
      loginSuccess({
        payload: res.data,
      })
    );
  } catch (error) {
    yield put(
      spawnAlert({
        isError: true,
        message: error.message,
      })
    );
  }
}

function* watchSessionSaga() {
  yield takeLatest(SESSION, sessionSaga);
}

const authSagas = [
  fork(watchLoginSaga),
  fork(watchLogoutSaga),
  fork(watchRegisterSaga),
  fork(watchSessionSaga),
];

export default authSagas;

import { takeLatest, call, put, fork } from "redux-saga/effects";

import { fetchStatementSuccess, fetchBalanceSuccess, spawnAlert } from "../actions";

import { FETCH_STATEMENT, FETCH_BALANCE } from "../types";
import { fetchStatement, fetchBalance } from "../apis";

function* fetchStatementSaga({ payload }) {
  try {
    const res = yield call(fetchStatement);
    yield put(
      fetchStatementSuccess({
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

function* watchFetchStatementSaga() {
  yield takeLatest(FETCH_STATEMENT, fetchStatementSaga);
}

function* fetchBalanceSaga({ payload }) {
  try {
    const res = yield call(fetchBalance);
    yield put(
      fetchBalanceSuccess({
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

function* watchFetchBalanceSaga() {
  yield takeLatest(FETCH_BALANCE, fetchBalanceSaga);
}

const statementSagas = [fork(watchFetchStatementSaga), fork(watchFetchBalanceSaga)];

export default statementSagas;

import { FETCH_STATEMENT, FETCH_STATEMENT_SUCCESS, FETCH_BALANCE, FETCH_BALANCE_SUCCESS } from "../types";

export const fetchStatement = () => ({ type: FETCH_STATEMENT });

export const fetchStatementSuccess = ({ payload }) => ({
  type: FETCH_STATEMENT_SUCCESS,
  payload,
});

export const fetchBalance = () => ({ type: FETCH_BALANCE });

export const fetchBalanceSuccess = ({ payload }) => ({
  type: FETCH_BALANCE_SUCCESS,
  payload,
});


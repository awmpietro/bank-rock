import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGOUT,
  LOGOUT_SUCCESS,
  REGISTER,
  REGISTER_SUCCESS,
  SESSION,
} from "../types";

export const login = credentials => ({ type: LOGIN, payload: { credentials } });

export const loginSuccess = ({ payload }) => ({ type: LOGIN_SUCCESS, payload });

export const register = credentials => ({
  type: REGISTER,
  payload: { credentials },
});

export const registerSuccess = ({ payload }) => ({
  type: REGISTER_SUCCESS,
  payload,
});

export const session = () => ({ type: SESSION });

export const logout = () => ({ type: LOGOUT });

export const logoutSuccess = () => ({ type: LOGOUT_SUCCESS });

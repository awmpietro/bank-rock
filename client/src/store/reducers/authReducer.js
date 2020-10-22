import { LOGIN_SUCCESS, LOGOUT_SUCCESS, REGISTER_SUCCESS } from "../types";

let user = {};
if (localStorage.getItem("user")) {
  user = JSON.parse(localStorage.getItem("user"));
}

const INITIAL_STATE = {
  userId: user.id ? user.id : "",
  email: user.email ? user.email : "",
  name: user.name ? user.name : "",
  isSignedIn:
    Object.keys(user).length === 0 && user.constructor === Object
      ? false
      : true,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      return {
        ...state,
        isSignedIn: true,
        userId: action.payload.user.id,
        email: action.payload.user.email,
        name: action.payload.user.name,
      };
    }
    case REGISTER_SUCCESS: {
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      return {
        ...state,
        isSignedIn: true,
        userId: action.payload.user.id,
        email: action.payload.user.email,
        name: action.payload.user.name,
      };
    }
    case LOGOUT_SUCCESS: {
      localStorage.removeItem("user");
      return {
        ...state,
        isSignedIn: false,
        userId: "",
        name: "",
        email: "",
      };
    }
    default:
      return state;
  }
};

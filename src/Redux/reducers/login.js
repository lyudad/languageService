import { createReducer } from "Helpers/redux";

import { LOGIN } from "../actions/login";

const initialState = {
  user: {
    email: "",
    password: "",
  },
  isAuth: false,
};

const loginReducer = {
  [LOGIN]: (state, action) => {
    return {
      ...state,
      user: action.data,
      isAuth: true,
    };
  },
};

export default createReducer(initialState, loginReducer);

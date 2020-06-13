import { createReducer } from "Helpers/redux";

import { SIGN_UP } from "Redux/actions/signUp";

const initialState = {
  user: {
    username: "",
    email: "",
    password: "",
    gender: "",
    isTermsOfUse: false,
  },
  isAuth: false,
};

const signUpReducer = {
  [SIGN_UP]: (state, action) => {
    return {
      ...state,
      user: action.data,
      isAuth: true,
    };
  },
};

export default createReducer(initialState, signUpReducer);

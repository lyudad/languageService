import { createReducer } from "Helpers/redux";

import { AUTH } from "Redux/actions/auth";

const initialState = {
  user: {
    username: "",
    email: "",
    password: "",
    gender: "",
    id: null,
  },
  isAuth: false,
};

const authReducer = {
  [AUTH]: (state, action) => {
    return {
      ...state,
      user: action.data,
      isAuth: true,
    };
  },
};

export default createReducer(initialState, authReducer);

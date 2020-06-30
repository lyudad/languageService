import { createReducer } from "Helpers/redux";

import { AUTH } from "Redux/actions/auth";
import {
  EDIT_EMAIL,
  EDIT_USERNAME,
  EDIT_PASSWORD,
} from "Redux/actions/profile";

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
  [EDIT_EMAIL]: (state, action) => {
    let newUser = state.user;
    newUser.email = action.data;

    return { ...state, user: newUser };
  },
  [EDIT_USERNAME]: (state, action) => {
    let newUser = state.user;
    newUser.username = action.data;

    return { ...state, user: newUser };
  },
  [EDIT_PASSWORD]: (state, action) => {
    let newUser = state.user;
    newUser.password = action.data;

    return { ...state, password: newUser};
  },
};

export default createReducer(initialState, authReducer);

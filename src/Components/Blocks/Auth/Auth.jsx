import React, { useState } from "react";
import { signUpAction } from "../../../Redux/actions/signUp";
import { connect } from "react-redux";
import { SignUp } from "./SignUp/SignUp";
import { Login } from "./Login/Login";
import { loginAction } from "../../../Redux/actions/login";

const Auth = ({ signUpUser, loginUser }) => {
  const [temp, setTemp] = useState(true);

  return temp ? (
    <SignUp signUpUser={signUpUser} setTemp={setTemp} />
  ) : (
    <Login loginUser={loginUser} setTemp={setTemp} />
  );
};

const mapStateToProps = (store) => {};

const mapDispathToProps = {
  signUpUser: signUpAction,
  loginUser: loginAction,
};

export default connect(null, mapDispathToProps)(Auth);

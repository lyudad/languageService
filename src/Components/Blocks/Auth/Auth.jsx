import React, { useState } from "react";
import { signUpAction } from "../../../Redux/actions/signUp";
import { connect } from "react-redux";
import { SignUp } from "./SignUp/SignUp";
import { Login } from "./Login/Login";

const Auth = ({ signUpAction }) => {
  const [temp, setTemp] = useState(false);

  return <SignUp signUpAction={signUpAction} setTemp={setTemp} />;

  // <Login setTemp={setTemp} />
};

const mapStateToProps = (store) => {};

const mapDispathToProps = {
  signUpAction,
};

export default connect(null, mapDispathToProps)(Auth);

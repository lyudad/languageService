import React, { useState, useEffect } from "react";
import { signUpAction } from "../../../Redux/actions/signUp";
import { connect } from "react-redux";
import { SignUp } from "./SignUp/SignUp";
import { Login } from "./Login/Login";
import { loginAction } from "../../../Redux/actions/login";
import { isEmpty } from "lodash";

const Auth = ({ signUpUser, loginUser }) => {
  const [temp, setTemp] = useState(true);
  const [usersDB, setUsersDB] = useState({
    users: [
      {
        email: "test@gmail.com",
        password: "01234567",
        username: "test",
        gender: "Male",
        id: 1,
      },
      {
        email: "test@gg.hg",
        password: "01234567",
        username: "test2",
        gender: "Male",
        id: 2,
      },
    ],
  });
  useEffect(() => {
    console.log(`useEffect usersDB >>>> `, usersDB);
  });

  const addNewuser = (data) => {
    let user = getUserByEmail(data);
    if (isEmpty(user)) {
      let newUserDB = usersDB;
      newUserDB.users.push({ id: Date.now(), ...data });
      setUsersDB(newUserDB);
      signUpUser({ id: Date.now(), ...data });
      
      return {
        type: "SUCCESS",
        msg: "You have successfully registered",
      };
    } else {
      return {
        type: "ERROR",
        msg: "User with that address is already exists",
      };
    }
  };

  const login = (data) => {
    let user = getUserByEmail(data);
    if (!isEmpty(user)) {
      if (user[0].password === data.password) {
        loginUser(user[0]);
        return {
          type: "SUCCESS",
          msg: "You have successfully logged in",
        };
      } else {
        return {
          type: "ERROR",
          msg: "login or password incorrect",
        };
      }
    } else {
      return {
        type: "ERROR",
        msg: "user with this email not found",
      };
    }
  };

  const getUserByEmail = (data) => {
    let user = usersDB.users.filter((item) => {
      return item.email === data.email;
    });
    return user;
  };

  return temp ? (
    <SignUp signUpUser={signUpUser} addNewuser={addNewuser} setTemp={setTemp} />
  ) : (
    <Login loginUser={loginUser} login={login} setTemp={setTemp} />
  );
};

const mapStateToProps = (store) => {};

const mapDispathToProps = {
  signUpUser: signUpAction,
  loginUser: loginAction,
};

export default connect(null, mapDispathToProps)(Auth);

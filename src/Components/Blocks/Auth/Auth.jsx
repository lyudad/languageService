import React, { useState, useEffect } from "react";
import { SignUp } from "Components/Blocks/Auth/SignUp/SignUp";
import { Login } from "Components/Blocks/Auth/Login/Login";
import { isEmpty } from "lodash";
import { connect } from "react-redux";
import { authAction } from "Redux/actions/auth";

export const Auth = ({ authUser }) => {
  console.log(authUser); //undefined

  const [changeForm, setChangeForm] = useState(true);
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
    console.log(`render`);
  });
    // useCallback ?
  const addNewuser = (data) => {
    let user = getUserByEmail(data);
    if (isEmpty(user)) {
      authUser({ id: Date.now(), ...data });
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
        authUser(user[0]);
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

  return changeForm ? (
    <SignUp addNewuser={addNewuser} setChangeForm={setChangeForm} />
  ) : (
    <Login login={login} setChangeForm={setChangeForm} />
  );
};

const mapStateToProps = (store) => {};
const mapDispathToProps = {
  authUser: authAction,
};

export default connect(null, mapDispathToProps)(Auth);

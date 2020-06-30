import React, {useState} from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

import { UserDataField } from "Components/Blocks/ProfilePage/Blocks/UserDataField";
import {
  ProfileWrraper,
  ProfileTitle,
  UserInformation,
  UserData,
} from "Components/Blocks/ProfilePage/styles";

export const User = ({ user, editEmail, editUserName, editPassword }) => {
  const [test, setTest] = useState(false)

  console.log(`User Render`)
  const userName = user.username;
  const email = user.email;
  const gender = user.gender;
  const id = user.id;

  return (
    <ProfileWrraper>
      <ProfileTitle>My Profile</ProfileTitle>
      <UserInformation>
        <Avatar size={64} icon={<UserOutlined />} />
        <UserDataField title={"Name"} ViewEditInput={userName} edit={editUserName} test={test}
          setTest={setTest}/>
        <UserDataField title={"Email"} ViewEditInput={email} edit={editEmail} test={test}
          setTest={setTest}/>
        <UserData>Gender: {gender}</UserData>
        <UserData>ID: {id}</UserData>
      </UserInformation>
    </ProfileWrraper>
  );
};
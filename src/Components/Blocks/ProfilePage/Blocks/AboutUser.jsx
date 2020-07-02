import React from "react";
import { Avatar, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";

import {
  ProfileTitle,
  UserInformation,
  UserData,
} from "Components/Blocks/ProfilePage/styles";

export const AboutUser = ({ userName, email, gender, id,onclick }) => {

  return (
    <React.Fragment>
      <ProfileTitle>My Profile</ProfileTitle>
      <UserInformation>
        <Avatar size={64} icon={<UserOutlined />} />
        <UserData>Name: {userName}</UserData>
        <UserData>Email: {email}</UserData>
        <UserData>Gender: {gender}</UserData>
        <UserData>ID: {id}</UserData>
      </UserInformation>
      <Button type="link" onClick={onclick} >
        Edit profile
      </Button>
    </React.Fragment>
  );
};

import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { Avatar, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";

import { CustomInput } from "Components/Blocks/Auth/Blocks/CustomInput";
import { schemaProfile } from "Helpers/Profile/schema";
import {
  ErrorEditProfileParagraph,
  InputContainer,
  EditProfileForm,
} from "Components/Blocks/ProfilePage/styles";
import { useState } from "react";

export const EditProfile = ({ email, userName, editEmail, editUserName, onclick,user }) => {
  const { handleSubmit, control, errors } = useForm({
    validationSchema: schemaProfile,
  });
  const [stateChange, setStateChange] = useState(false);
  useEffect(() => {
    onclick();
  }, [stateChange]);

  const onSubmit = (data) => {
    if (data.email !== email && data.username !== userName) {
      editEmail(data.email);
      editUserName(data.username);
    }
    
  };

  return (
    <EditProfileForm onSubmit={handleSubmit(onSubmit)}>
      <Avatar size={64} icon={<UserOutlined />} />
      <InputContainer>
        Email
        <Controller
          as={CustomInput("email")}
          name="email"
          control={control}
          defaultValue={email}
        />
        {errors.email && (
          <ErrorEditProfileParagraph>
            {errors.email.message}
          </ErrorEditProfileParagraph>
        )}
      </InputContainer>

      <InputContainer>
        Name
        <Controller
          as={CustomInput("username")}
          name="username"
          control={control}
          defaultValue={userName}
        />
        {errors.username && (
          <ErrorEditProfileParagraph>
            {errors.username.message}
          </ErrorEditProfileParagraph>
        )}
      </InputContainer>
      <Button htmlType="submit" type="primary">
        Save changes
      </Button>
    </EditProfileForm>
  );
};

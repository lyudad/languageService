import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Button } from "antd";
import { CustomInput } from "../inputs";
import { schemaLogin } from "../../../../Helpers/Auth/schema";

import {
  InputContainer,
  LabelAuth,
  ErrorAuthParagraph,
  CustomForm,
  CustomMsg,
} from "../styles";

export const Login = ({ login, setTemp }) => {
  const [statusLogin, setStatusLogin] = useState(false);
  const { handleSubmit, control, errors } = useForm({
    validationSchema: schemaLogin,
  });

  const onSubmit = (data) => {
    let response = login(data);
    setStatusLogin(response);
  };

  return (
    <CustomForm onSubmit={handleSubmit(onSubmit)}>
      {statusLogin.type && (
        <CustomMsg type={statusLogin.type}>{statusLogin.msg}</CustomMsg>
      )}
      <InputContainer>
        <LabelAuth>Email</LabelAuth>
        <Controller
          as={CustomInput("email")}
          name="email"
          control={control}
          defaultValue=""
        />
        {errors.email && (
          <ErrorAuthParagraph>{errors.email.message}</ErrorAuthParagraph>
        )}
      </InputContainer>

      <InputContainer>
        <LabelAuth>Password</LabelAuth>
        <Controller
          as={CustomInput("password")}
          name="password"
          control={control}
          defaultValue=""
        />
        {errors.password && (
          <ErrorAuthParagraph>{errors.password.message}</ErrorAuthParagraph>
        )}
      </InputContainer>

      <Button htmlType="submit" type="primary">
        Login
      </Button>

      <Button onClick={() => setTemp(true)}>go to signUp</Button>
    </CustomForm>
  );
};

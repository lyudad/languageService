import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Button } from "antd";
import { CustomInput } from "../inputs";
import { schemaLogin } from "../../../../Helpers/Auth/schema";

import { InputContainer, LabelAuth, ErrorAuthParagraph } from "../styles";

export const Login = ({ loginUser, setTemp }) => {
  const { handleSubmit, control, errors } = useForm({
    validationSchema: schemaLogin,
  });

  const onSubmit = (data) => loginUser(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
    </form>
  );
};

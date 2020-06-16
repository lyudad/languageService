import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Button } from "antd";
import { CustomInput, CustomSelect } from "../inputs";
// import { schema } from "/Helpers/Auth/schema";
import { schemaSignUp } from "../../../../Helpers/Auth/schema";

import {
  InputContainer,
  LabelAuth,
  ErrorAuthParagraph,
  CustomForm,
  CustomMsg,
} from "../styles";

export const SignUp = ({ addNewuser, setTemp }) => {
  const [statusLogin, setStatusLogin] = useState(false);
  const { handleSubmit, control, errors } = useForm({
    validationSchema: schemaSignUp,
  });
  const typeGender = ["- - - ", "Male", "Female", "Other"];

  const onSubmit = (data) => {
    let response = addNewuser(data);
    setStatusLogin(response);
  };

  return (
    <CustomForm onSubmit={handleSubmit(onSubmit)}>
      {statusLogin.type && (
        <CustomMsg type={statusLogin.type}>
          <p>{statusLogin.msg}</p>
        </CustomMsg>
      )}
      <InputContainer>
        <LabelAuth>User Name</LabelAuth>
        <Controller
          as={CustomInput("user name")}
          name="username"
          control={control}
          defaultValue=""
        />
        {errors.username && (
          <ErrorAuthParagraph>{errors.username.message}</ErrorAuthParagraph>
        )}
      </InputContainer>

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

      <InputContainer>
        <LabelAuth>Gender</LabelAuth>
        <Controller
          as={CustomSelect(typeGender[0], typeGender)}
          name="gender"
          control={control}
          defaultValue={typeGender[0]}
        />
      </InputContainer>

      <Button htmlType="submit" type="primary">
        Create Account
      </Button>
      <Button onClick={() => setTemp(false)}>go to login</Button>
    </CustomForm>
  );
};

/* <InputContainer>
        <LabelAuth>I agree with...</LabelAuth>
        <Controller
          as={CustomCheckbox()}
          name="isTermsOfUse"
          control={control}
          defaultValue={false}
        />
      </InputContainer> */

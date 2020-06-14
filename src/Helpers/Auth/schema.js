import * as yup from "yup";

export const schemaSignUp = yup.object().shape({
  username: yup.string().required(),
  email: yup
    .string()
    .email()
    .required(),
  password: yup.string().min(8),
});

export const schemaLogin = yup.object().shape({
  email: yup
    .string()
    .email()
    .required(),
  password: yup.string().min(8),
});

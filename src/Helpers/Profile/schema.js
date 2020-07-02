import * as yup from "yup";

export const schemaProfile = yup.object().shape({
  username: yup.string().required(),
  email: yup
    .string()
    .email()
    .required(),
});

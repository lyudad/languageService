import * as yup from "yup";

export const schema = yup.object().shape({
  username: yup
    .string()
    .required()
    .trim(),
  email: yup
    .string()
    .email()
    .trim()
    .required(),
  password: yup
    .string()
    .min(8)
    .trim(),
  isTermsOfUse: yup.mixed().required(),
});

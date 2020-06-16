export const LOGIN = "LOGIN";

export const loginAction = (data) => {
  return {
    type: LOGIN,
    data,
  };
};

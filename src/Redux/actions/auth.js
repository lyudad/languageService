export const AUTH = "AUTH";

export const authAction = (data) => {
  return {
    type: AUTH,
    data,
  };
};

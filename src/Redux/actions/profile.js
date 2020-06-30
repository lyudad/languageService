export const EDIT_EMAIL = "EDIT_EMAIL";
export const EDIT_USERNAME = "EDIT_NAME";
export const EDIT_PASSWORD = "EDIT_PASSWORD";

export const editEmailAction = (data) => {
  return {
    type: EDIT_EMAIL,
    data,
  };
};

export const editUserNameAction = (data) => {
  return {
    type: EDIT_USERNAME,
    data,
  };
};

export const editPasswordAction = (data) => {
  return {
    type: EDIT_PASSWORD,
    data,
  };
};

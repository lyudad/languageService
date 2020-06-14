import axios from "axios";

export const LOGIN = "LOGIN";

export const loginAction = (data) => {
  return (dispatch) => {
    return axios
      .post("http://localhost:3001/login", { ...data })
      .then(
        (response) => (
          (data["accessToken"] = response.data.accessToken),
          dispatch({
            type: LOGIN,
            data,
          })
        )
      )
      .catch((error) => {
        console.log(error);
      });
  };
};

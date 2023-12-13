import axios from "axios";
const URL = process.env.REACT_APP_API_URL;
export const register = (value) => {
  return {
    type: "REGISTER",
    payload: value,
  };
};
export const registerSuccess = (value) => {
  return {
    type: "REGISTER_SUCCESS",
    payload: value,
  };
};
export const registerFail = (error) => {
  return {
    type: "REGISTER_FAIL",
    payload: error,
  };
};


export const registerData = (value, navigate) => {
  return async(dispatch) => {
    dispatch(register(value));

    await axios
      .post(URL + "/register", value)
      .then((res) => {
        let access_token = res.data;
        localStorage.setItem("token", JSON.stringify(access_token));
        dispatch(registerSuccess(access_token));
        navigate("/");
      })
      .catch((err) => {
        let error = err;
        dispatch(registerFail(error));
      });
  };
};



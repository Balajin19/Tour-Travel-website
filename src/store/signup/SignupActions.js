import axios from "axios";
const URL = process.env.REACT_APP_API_URL;
export const signup = (value) => {
  return {
    type: "SIGNUP",
    payload: value,
  };
};
export const signupSuccess = (value) => {
  return {
    type: "SIGNUP_SUCCESS",
    payload: value,
  };
};
export const signupFail = (error) => {
  return {
    type: "SIGNUP_FAIL",
    payload: error,
  };
};

export const logout = () => {
    return {
      type: "LOGOUT",
    };
};






export const signupData = (value, navigate) => {
   return async (dispatch) => {
     dispatch(signup(value));

     await axios
       .post(URL+"/signup", value)
       .then((res) => {
         let access_token = res.data;
         localStorage.setItem("token", JSON.stringify(access_token));
         dispatch(signupSuccess(access_token));
         navigate("/");
       })
       .catch((err) => {
         let error = err;
         dispatch(signupFail(error));
       });
   };
};

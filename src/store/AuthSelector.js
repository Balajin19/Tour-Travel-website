import { logout, signupSuccess } from "./signup/SignupActions";

export const isAuthenticated = ( state ) =>
{
     if (state.signup.token || state.register.token) return true;
    return false
};

export const checkLogin = (dispatch) => {
  let tokenDetails = localStorage.getItem("token");
    if ( !tokenDetails )
    {
        dispatch( logout() )
    }
    const token = JSON.parse(tokenDetails);
    dispatch(signupSuccess(token));
  
};

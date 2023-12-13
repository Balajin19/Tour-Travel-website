const initialState = {
  token: '',
  error:''
};

export const SignupReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNUP":
      return {
        ...state,
      };
    case "SIGNUP_SUCCESS":
      return {
        ...state,
        token: action.payload,
        error: "",
      };
    case "SIGNUP_FAIL":
      return {
        ...state,
        token: "",
        error: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        token: "",
        error: "",
      };
    default:
      return state;
  }
};

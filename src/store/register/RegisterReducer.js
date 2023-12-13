const initialState = {
  token: "",
  error: "",
};
export const RegisterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER":
      return {
        ...state,
      };
    case "REGISTER_SUCCESS":
      return {
        ...state,
        token: action.payload,
        error: "",
      };
    case "REGISTER_FAIL":
      return {
        ...state,
        token: "",
        error: action.payload,
      };
    default:
      return state;
  }
};

import { combineReducers } from "redux";
import { RegisterReducer } from "./register/RegisterReducer";
import { SignupReducer } from "./signup/SignupReducer";

export const rootReducer = combineReducers({
  signup: SignupReducer,
  register: RegisterReducer,
});
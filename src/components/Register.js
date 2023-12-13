import "./Register.css";
import {  useNavigate } from "react-router-dom";
import {  useState } from "react";
import {connect, useDispatch, useSelector } from "react-redux";
import { registerData } from "../store/register/RegisterActions";
import { isAuthenticated } from "../store/AuthSelector";

function Register ( { isAuthenticated } ) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [validatePassword, setValidatePassword] = useState(false);
  const error = useSelector( ( state ) => state.register?.error );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const registerForm = (e) => {
    e.preventDefault();
    let value = { name, email, password };
    dispatch(registerData(value, navigate));
  };

  return (
    <>
      <div className="reg-form">
        {error?.response ? (
          <div className="alert alert-danger" role="alert">
            {error.response.data.error?.message}
          </div>
        ) : error ? (
          <div className="alert alert-danger" role="alert">
            Something went wrong!
          </div>
        ) : (
          ""
        )}
        <h1>Register</h1>
        <form onSubmit={registerForm}>
          <div>
            <i className="fa-solid fa-user"></i>
            <input
              type="text"
              placeholder="Enter your Name"
              name="name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <i className="fa-solid fa-envelope"></i>
            <input
              type="email"
              placeholder="Enter your Email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <i className="fa-solid fa-lock"></i>
            <input
              type="password"
              placeholder="Create a Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <i className="fa-solid fa-lock"></i>
            <input
              style={{
                marginBottom: "12px",
              }}
              type="password"
              placeholder="Confirm a Password"
              name="cnf_password"
              required
              onInput={(e) => {
                if ((e.target.value).length > 0 && password !== e.target.value)
                  setValidatePassword(true);
                else setValidatePassword(false);
              }}
            />
            <h6
              className="text text-danger"
              style={{ width: "350px", marginBottom: "20px" }}
            >
              {validatePassword ? "Password doesn't match" : ""}
            </h6>
          </div>

          <button type="submit" className="reg-btn" disabled={validatePassword}>
            Register
          </button>
          <p>
            Already have an account?{" "}
            <span>
              <a href="/signup" className="signup-link">
                Sign Up
              </a>
            </span>
          </p>
        </form>
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    isAuthenticated: isAuthenticated( state )
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    postData: (value, navigate) => dispatch(registerData(value, navigate)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Register);

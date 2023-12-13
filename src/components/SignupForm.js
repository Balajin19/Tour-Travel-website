import {  useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import { signupData } from '../store/signup/SignupActions';
import './SignupFormStyles.css';

function SignupForm ()
{
    const [ email, setEmail ] = useState();
    const [ password, setPassword ] = useState();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const error = useSelector( ( state ) => state?.signup.error );
   
    const signupFormSubmit = (e) =>
    {
        e.preventDefault();
        let value={email,password}
        dispatch(signupData(value,navigate));
    }
    return (
      <>
        <div className="signup-form">
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
          <h1>Sign Up</h1>
          <form onSubmit={signupFormSubmit}>
            <div>
              <i className="fa-solid fa-envelope"></i>
              <input
                type="email"
                placeholder="Email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <i className="fa-solid fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
         
            <button className="signup-btn">Sign Up</button>
            <br></br>
            <p>
              Don't have an account?{" "}
              <span>
                <a href="/register" className="reg-link">
                  Register
                </a>
              </span>
            </p>
          </form>
        </div>
      </>
    );
}
export default SignupForm;

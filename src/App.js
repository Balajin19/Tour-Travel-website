import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import Signup from "./routes/Signup";
import Register from "./components/Register";
import { connect, useDispatch } from "react-redux";
import { CookiesProvider } from "react-cookie";
import { checkLogin, isAuthenticated } from "./store/AuthSelector";
import { useEffect } from "react";
function App ( props )
{
  const dispatch = useDispatch();
  useEffect( () =>
  {
    checkLogin(dispatch);
  },[])
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route
          path="/signup"
          element={props.isAuthenticated ? <Navigate to="/" /> : <Signup />}
        />
        <Route
          path="/register"
          element={props.isAuthenticated ? <Navigate to="/" /> : <Register />}
        />
        <Route
          path="/about"
          element={
            !props.isAuthenticated ? <Navigate to="/signup" /> : <About />
          }
        />
        <Route
          path="/about"
          element={
            !props.isAuthenticated ? <Navigate to="/signup" /> : <About />
          }
        />
        <Route
          path="/contact"
          element={
            !props.isAuthenticated ? <Navigate to="/signup" /> : <Contact />
          }
        />
        <Route
          path="/service"
          element={
            !props.isAuthenticated ? <Navigate to="/signup" /> : <Service />
          }
        />
      </Routes>
    </div>
  );
}

const mapStateToProps = ( state ) =>
{
  return {

    isAuthenticated: isAuthenticated(state),
  };
};


export default connect(mapStateToProps)(App);

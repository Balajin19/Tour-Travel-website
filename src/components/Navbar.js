import { useState } from 'react';
import './NavbarStyles.css';
import { MenuItems } from './MenuItems';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../store/signup/SignupActions';
import { useDispatch } from 'react-redux';


export const Navbar = () =>
{
    
  
  
  const [ clicked, setClicked ] = useState( false )
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () =>
  {
    
    setClicked( true );
  };
  const signupbtn = () =>
  {
    navigate("/signup");
  }
      
  const logoutbtn=()=>
  {
    localStorage.removeItem( "token" );
    dispatch( logout() );
    navigate('/signup')
  };
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Trippy</h1>
        <div className="menu-icons" onClick={handleClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
          {localStorage.getItem("token") ? (
            <button className="nav-links-mobile" onClick={logoutbtn}>
              Logout
            </button>
          ) : (
            <button className="nav-links-mobile" onClick={signupbtn}>
              Signup
            </button>
          )}
        </ul>
      </nav>
    );
  }

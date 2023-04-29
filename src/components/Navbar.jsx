import React from 'react';
import StyledNavbar from '../styles/componentStyles/StyledNavbar';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../hooks';

const Navbar = () => {
  const auth = useAuth();

  return (
    <StyledNavbar>
      <ul>
        <li className="brand">
          <NavLink to="/">
            <div className="logo-container">
              <img src={require('../assets/images/logo.png')} alt="logo" />
            </div>
            <span>Sharespace</span>
          </NavLink>
        </li>

        <li>
          <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            name="search-input"
            id="search-freind"
            placeholder="Search..."
          />
        </li>

        {auth.user ? (
          <>
            <li>
              <h1 className="username">{auth.user.firstname}</h1>
            </li>
            <li>
              <NavLink to="/" onClick={auth.logout} className="logout">
                Logout
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to="/signin" className="signin">
                Login
              </NavLink>
            </li>

            <li>
              <NavLink to="/signup" className="signup">
                <i className="fa-solid fa-user-plus"></i>
                <span>Signup</span>
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </StyledNavbar>
  );
};

export default Navbar;

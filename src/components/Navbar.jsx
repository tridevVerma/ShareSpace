import React from 'react';
import StyledNavbar from '../styles/componentStyles/StyledNavbar';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
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

        <li>
          <NavLink to="/signin" className="signin">
            Login
          </NavLink>
        </li>

        <li>
          <NavLink to="/" className="signup">
            <i className="fa-solid fa-user-plus"></i>
            <span>Signup</span>
          </NavLink>
        </li>
      </ul>
    </StyledNavbar>
  );
};

export default Navbar;

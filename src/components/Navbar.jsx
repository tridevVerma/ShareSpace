import React from 'react';
import StyledNavbar from '../styles/componentStyles/StyledNavbar';

const Navbar = () => {
  return (
    <StyledNavbar>
      <ul>
        <li className="brand">
          <a href="/">
            <div className="logo-container">
              <img src={require('../assets/images/logo.png')} alt="logo" />
            </div>
            <span>Sharespace</span>
          </a>
        </li>

        <li>
          <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            name="search-input"
            id="search-input"
            placeholder="Search..."
          />
        </li>

        <li>
          <a href="/" className="signin">
            Login
          </a>
        </li>

        <li>
          <a href="/" className="signup">
            <i class="fa-solid fa-user-plus"></i>
            <span>Signup</span>
          </a>
        </li>
      </ul>
    </StyledNavbar>
  );
};

export default Navbar;

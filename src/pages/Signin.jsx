import React, { useState, useEffect } from 'react';
import StyledSignin from '../styles/pageStyles/StyledSignin';

import { useInput, useAuth } from '../hooks';
import { NavLink, useNavigate } from 'react-router-dom';

const Signin = ({ notify }) => {
  const email = useInput('');
  const password = useInput('');
  const [signingIn, setSigningIn] = useState(false);
  const auth = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSigningIn(true);

    if (!email.value || !password.value) {
      notify('Please enter both email and password !!', 'error');
      setSigningIn(false);
      return;
    }

    const result = await auth.login({
      email: email.value,
      password: password.value,
    });
    if (result.success) {
      notify('Successfully logged in', 'success', 4000);
      navigate('/settings');
    } else {
      notify(result.message, 'error', 4000);
    }
    setSigningIn(false);
  };

  useEffect(() => {
    console.log('signin....');
    if (auth.user) {
      return navigate('/');
    }
  }, [auth.user, navigate]);

  return (
    <StyledSignin>
      <div className="signin-container">
        <div className="signin-form-container">
          <div className="brand-logo">
            <img src={require('../assets/images/logo.png')} alt="logo" />
          </div>
          <h1>Welcome Back</h1>
          <button className="google-login-btn">
            <img
              src={require('../assets/images/google.png')}
              alt="google-logo"
            />
            <span>Login with google</span>
          </button>
          <div className="login-divider">or login with email</div>
          <form onSubmit={handleSubmit}>
            <div className="email-field">
              <input
                type="email"
                name="email"
                id="email"
                {...email}
                placeholder="Your Email..."
              />
            </div>
            <div className="password-field">
              <input
                type="password"
                name="password"
                id="password"
                {...password}
                placeholder="Your Password..."
              />
            </div>
            <div className="forget-password-container">
              <div className="checkbox-container">
                <input type="checkbox" name="rememberMe" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
              </div>
              <NavLink to="/">Forget Password</NavLink>
            </div>
            <button type="submit" disabled={signingIn}>
              {signingIn ? (
                <i className="fa-solid fa-lock"></i>
              ) : (
                <i className="fa-solid fa-lock-open"></i>
              )}

              {signingIn ? 'Logging In...' : 'Sign In'}
            </button>
          </form>
          <div className="signup-link">
            <p>
              Don't have an account yet? <NavLink to="/signup">Sign up</NavLink>
            </p>
          </div>
        </div>

        <div className="img-container">
          <img src={require('../assets/images/login.png')} alt="login" />
        </div>
      </div>
    </StyledSignin>
  );
};

export default Signin;

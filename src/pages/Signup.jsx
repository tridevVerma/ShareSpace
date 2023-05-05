import React, { useState, useEffect } from 'react';
import StyledSignup from '../styles/pageStyles/StyledSignup';

import { useInput, useAuth } from '../hooks';
import { NavLink, useNavigate } from 'react-router-dom';

const Signup = ({ notify }) => {
  const firstname = useInput('');
  const lastname = useInput('');
  const email = useInput('');
  const password = useInput('');
  const confirmPassword = useInput('');

  const [signingUp, setSigningUp] = useState(false);
  const auth = useAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSigningUp(true);

    let error = false;
    if (
      !firstname.value ||
      !lastname.value ||
      !email.value ||
      !password.value ||
      !confirmPassword.value
    ) {
      notify('Please fill all fields !!', 'error');
      error = true;
    }

    if (password.value !== confirmPassword.value) {
      notify("Password and confirm-password didn't match !!", 'error');
      error = true;
    }

    if (error) {
      setSigningUp(false);
      return;
    }

    const result = await auth.signup({
      firstname: firstname.value,
      lastname: lastname.value,
      email: email.value,
      password: password.value,
    });

    if (result.success) {
      notify('Successfully signed up', 'success', 4000);
      navigate('/signin');
    } else {
      notify(result.message, 'error', 4000);
    }
    setSigningUp(false);
  };

  useEffect(() => {
    console.log('signup....');
    if (auth.user) {
      return navigate('/');
    }
  }, [auth.user, navigate]);
  return (
    <StyledSignup>
      <div className="signup-container">
        <div className="img-container">
          <img src={require('../assets/images/signup.png')} alt="login" />
        </div>
        <div className="signup-form-container">
          <div className="brand-logo">
            <img src={require('../assets/images/logo.png')} alt="logo" />
          </div>

          <button className="google-signup-btn">
            <img
              src={require('../assets/images/google.png')}
              alt="google-logo"
            />
            <span>Signup with google</span>
          </button>
          <div className="signup-divider">or signup with email</div>
          <form onSubmit={handleSubmit}>
            <div className="name-fields">
              <input
                type="text"
                name="firstname"
                id="firstname"
                {...firstname}
                placeholder="Your First Name..."
              />
              <input
                type="text"
                name="lastname"
                id="lastname"
                {...lastname}
                placeholder="Your Last Name..."
              />
            </div>
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
            <div className="confirm-password-field">
              <input
                type="password"
                name="confirmPassword"
                id="confirm-password"
                {...confirmPassword}
                placeholder="Confirm Password..."
              />
            </div>
            <button type="submit" disabled={signingUp}>
              {signingUp ? (
                <i className="fa-solid fa-lock"></i>
              ) : (
                <i className="fa-solid fa-lock-open"></i>
              )}

              {signingUp ? 'Signing Up...' : 'Sign Up'}
            </button>
          </form>
          <div className="signup-link">
            <p>
              Already have an account? <NavLink to="/signin">Sign In</NavLink>
            </p>
          </div>
        </div>
      </div>
    </StyledSignup>
  );
};

export default Signup;

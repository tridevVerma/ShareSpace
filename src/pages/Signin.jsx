import React, { useState } from 'react';
import StyledSignin from '../styles/pageStyles/StyledSignin';

import { useInput, useAuth } from '../hooks';

const Signin = ({ notify }) => {
  const email = useInput('');
  const password = useInput('');

  const [loggingIn, setLoggingIn] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.value || !password.value) {
      notify('Please enter both email and password !!', 'error');
      return;
    }

    await login({ email: email.value, password: password.value });

    notify('Successfully logged in', 'success', 4000);
  };
  return (
    <>
      <StyledSignin className="signin">
        <form onSubmit={handleSubmit}>
          <div className="email-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              {...email}
              placeholder="Email here..."
            />
          </div>
          <div className="password-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              {...password}
              placeholder="Email here..."
            />
          </div>
          <button type="submit" disabled={loggingIn}>
            {loggingIn ? (
              <i className="fa-solid fa-lock"></i>
            ) : (
              <i className="fa-solid fa-lock-open"></i>
            )}

            {loggingIn ? 'Logging In...' : 'Submit'}
          </button>
        </form>
      </StyledSignin>
    </>
  );
};

export default Signin;

import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import '../styles/style.css'

import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <main className="page-container">
  <div className="content-container">
    <div className="login-box">
      <h4 className="">LOGIN</h4>
      <div className="form-column">
        <form onSubmit={handleFormSubmit}>
          <div className="input-container">
            <label className="form-label" htmlFor="email">Email:</label>
            <input
              className="form-input"
              placeholder="Your Email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <label className="form-label" htmlFor="password">Password:</label>
            <input
              className="form-input"
              placeholder="Your Password"
              name="password"
              type="password"
              value={formState.password}
              onChange={handleChange}
            />
          </div>
          <button
            className="submitbttn"
            style={{ cursor: 'pointer' }}
            type="submit"
          >
            Submit
          </button>
        </form>
        {error && (
          <div className="errorMsg">
            {error.message}
          </div>
        )}
      </div>
    </div>
  </div>
</main>
  );
};

export default Login;

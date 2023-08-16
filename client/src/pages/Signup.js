import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import '../styles/style.css'

import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  //update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  //submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="page-container">
      <div className="content-container">
        <div className="login-box">
          <h4 className="">Sign Up</h4>
          <div className="form-column">
            {data && alert("You are signed up doofus!")}
            <form onSubmit={handleFormSubmit}>
              <div className="input-container">
              <label className="form-label" htmlFor="username">Username:</label>
                <input
                  className="form-input"
                  placeholder="Make a Username"
                  name="username"
                  type="text"
                  value={formState.username}
                  onChange={handleChange}
                />
              </div>
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
            <div className='error-container'>
            {error && (
              <div className="errorMsg">
                {error.message}
              </div>
            )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
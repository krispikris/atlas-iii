// react-app/src/components/LoginFormModal/LoginForm.js

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../../store/session";

// import * as sessionActions from "../../../store/session";
// import { Redirect } from 'react-router-dom';

const LoginForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  // const user = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [validationErrors, setValidationErrors] = useState([]);

  useEffect(() => {
    const errors = [];

    if (!email || email.length < 3 || email > 40)
      errors.push(
        "Please enter valid credentials. Credentials/Email must be more than 3 and less than 40 characters."
      );
    if (!password || password.length < 3 || password > 30)
      errors.push("Please enter valid password.");

    setValidationErrors(errors);
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validationErrors.length > 0) return;

    setErrors([]);
    const data = await dispatch(login(email, password));

    if (data.errors) setValidationErrors(data.errors);
    return history.push("/discover");
  };

  return (
    <div className="login-modal">
      <form id="login-form" onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, ind) => (
            <li key={ind}>{error}</li>
          ))}
        </ul>

        <div className="errors-login-form">
          {validationErrors.length > 0 && (
            <ul className="login-errors">
              {validationErrors.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          )}
        </div>
        <label id="login-form-title">LOGIN FORM</label>
        <label id="welcome-back-to-atlas-login">Welcome back to atlas.</label>
        <div>
          <label id="login-input-title" htmlFor="email">
            Email
          </label>
          <input
            id="login-form-inputs"
            name="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label id="login-input-title" htmlFor="password">
            Password
          </label>
          <input
            id="login-form-inputs"
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="login-submit-button" type="submit">
            Login
          </button>
          <button
            className="demo-login-submit-button"
            onClick={() => {
              setEmail("demo@aa.io");
              setPassword("demo");
            }}
            type="submit"
          >
            Demo User
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

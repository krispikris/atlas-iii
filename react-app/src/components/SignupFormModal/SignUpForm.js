import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/session";
import "./SignupFormModal.css";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);

  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [profilePhoto, setProfilePhoto] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState([]);
  const [validationErrors, setValidationErrors] = useState([]);

  useEffect(() => {
    const errors = [];

    if (!username || username.length < 3 || username.length > 40) {
      errors.push(
        "Please enter valid user. User must be more than 3 and less than 40 characters."
      );
    }

    if (!firstName || firstName.length < 2 || firstName.length > 50) {
      errors.push(
        "Please enter valid first name. First name must be more than 2 and less than 50 characters."
      );
    }

    if (!lastName || lastName.length < 2 || lastName.length > 50) {
      errors.push(
        "Please enter valid last name. Last name must be more than 2 and less than 50 characters."
      );
    }

    if (!email || email.length > 50) {
      errors.push(
        "Please enter valid email. Email must be less than 50 characters and include @."
      );
    }

    // if (!bio || bio.length < 5 || bio.length > 255) {
    //   errors.push(
    //     "Please enter valid bio. Bio must be more than 5 and less than 255 characters."
    //   );
    // }

    if (!profilePhoto || profilePhoto.length > 255) {
      errors.push(
        "Please enter valid photo. Photo URL must be more than 5 and less than 255 characters"
      );
    }

    if (!password || password.length < 3 || password.length > 30) {
      errors.push(
        "Please enter valid password. password must be more than 3 and less than 30 characters."
      );
    }

    if (!repeatPassword || repeatPassword !== password) {
      errors.push("Passwords must match for confirmation.");
    }

    setValidationErrors(errors);
  }, [
    username,
    firstName,
    lastName,
    email,
    bio,
    profilePhoto,
    password,
    repeatPassword,
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (validationErrors.length > 0) return;

    if (password === repeatPassword) {
      setErrors([]);
      const data = await dispatch(
        signUp(
          username,
          firstName,
          lastName,
          email,
          bio,
          profilePhoto,
          password
        )
      );

      // console.log(`SIGNUP FORM FRONT END DATA`, data);
      if (data && data.errors) {
        // setValidationErrors(data);
        setErrors(data.errors);
        // console.log(`SETERRORS :`, errors);
        return;
      }
    }
    return setErrors([
      "Repeat Password field must be the same as the Password field",
    ]);
  };

  // const updateUsername = (e) => {
  //   setUsername(e.target.value);
  // };

  // const updateEmail = (e) => {
  //   setEmail(e.target.value);
  // };

  // const updatePassword = (e) => {
  //   setPassword(e.target.value);
  // };

  // const updateRepeatPassword = (e) => {
  //   setRepeatPassword(e.target.value);
  // };

  if (user) {
    return <Redirect to="/discover" />;
  }

  return (
    <div class="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <ul className="signup-errors">
          {errors.map((error, ind) => (
            <li key={ind}>{error}</li>
          ))}
        </ul>

        <div className="errors-signup-form">
          {isSubmitted && (
            <ul className="signup-errors">
              {validationErrors.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          )}
        </div>

        <label id="welcome-to-atlas-signup">Welcome to atlas.</label>
        <div class="signup-form-input-container">
          <div>
            <label id="signup-input-title">
              User Name<p id="required"> *</p>
            </label>
            <input
              id="signup-form-inputs"
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
          </div>

          <div>
            <label id="signup-input-title">
              First Name<p id="required"> *</p>
            </label>
            <input
              id="signup-form-inputs"
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            ></input>
          </div>

          <div>
            <label id="signup-input-title">
              Last Name<p id="required"> *</p>
            </label>
            <input
              id="signup-form-inputs"
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            ></input>
          </div>

          <div>
            <label id="signup-input-title">
              Email<p id="required"> *</p>
            </label>
            <input
              id="signup-form-inputs"
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>

          <div>
            <label id="signup-input-title">Bio</label>
            <input
              id="signup-form-inputs"
              type="text"
              name="email"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            ></input>
          </div>

          <div>
            <label id="signup-input-title">
              Profile Photo URL<p id="required"> *</p>
            </label>
            <input
              id="signup-form-inputs"
              type="text"
              name="profilePhoto"
              value={profilePhoto}
              onChange={(e) => setProfilePhoto(e.target.value)}
            ></input>
          </div>

          <div>
            <label id="signup-input-title">
              Password<p id="required"> *</p>
            </label>
            <input
              id="signup-form-inputs"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>

          <div>
            <label id="signup-input-title">
              Repeat Password<p id="required"> *</p>
            </label>
            <input
              id="signup-form-inputs"
              type="password"
              name="repeat_password"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              required={true}
            ></input>
          </div>

          <button className="signup-submit-button" type="submit">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;

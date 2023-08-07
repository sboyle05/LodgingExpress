import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import * as sessionActions from "../../store/session";
import "./SignupForm.css";

function SignupFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors({});
      return dispatch(
        sessionActions.signup({
          email,
          username,
          firstName,
          lastName,
          password,
        })
      )
        .then(closeModal)
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) {
            setErrors(data.errors);
          }
        });
    }
    return setErrors({
      confirmPassword: "Confirm Password field must be the same as the Password field"
    });
  };

  const signupDisabled = email.length < 1 || firstName.length < 1 || lastName.length < 1 || password.length < 6 || confirmPassword.length < 6 || username.length < 4

  return (
    <>
      <section className="signupContainer">
      <h1 className="signupTitle">Sign Up</h1>
      <form className="signupForm" onSubmit={handleSubmit}>
          <input className="signupInput"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

        {errors.email && <p>{errors.email}</p>}


          <input className="signupInput"
            type="text"
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />

        {errors.username && <p>{errors.username}</p>}


          <input className="signupInput"
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />

        {errors.firstName && <p>{errors.firstName}</p>}


          <input className="signupInput"
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />

        {errors.lastName && <p>{errors.lastName}</p>}


          <input className="signupInput"
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

        {errors.password && <p>{errors.password}</p>}


          <input className="signupInput"
            type="password"
            value={confirmPassword}
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

        {errors.confirmPassword && (
          <p>{errors.confirmPassword}</p>
        )}
        <br></br><button className="signupformBut" type="submit" disabled={signupDisabled}>Sign Up</button>
      </form>
      </section>
    </>
  );
}

export default SignupFormModal;

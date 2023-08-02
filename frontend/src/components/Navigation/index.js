// frontend/src/components/Navigation/index.js
import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
// import
import "./Navigation.css";


function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <><section className="buttons">
      <span><NavLink to='/spots/new'><button className="createSpot">Create a new spot</button></NavLink></span>
      <li>
        <ProfileButton user={sessionUser} />
      </li>
      </section>
      </>
    );
  } else {
    sessionLinks = (
      <li>
        <OpenModalButton
          buttonText="Log In"
          modalComponent={<LoginFormModal />}
        />
        <OpenModalButton
          buttonText="Sign Up"
          modalComponent={<SignupFormModal />}
        />
      </li>
    );
  }

  return (
    <section className="ulNav">

        <NavLink className="lodgingExpress" exact to="/">
          Lodging Express
        </NavLink>

      {isLoaded && sessionLinks}
    </section>
  );
}

export default Navigation;

// react-app/src/components/Navigation/index.js
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

// when logged in
import CreatePostForm from "../Posts/CreatePostFormModal/CreatePostForm";
import CreatePostFormModal from "../Posts/CreatePostFormModal";
import ProfileButton from "./ProfileButton";
import LogoutButton from "../Auth/LogoutButton";

// on splash (not logged)
import SignupFormModal from "../Auth/SignupFormModal";
import LoginFormModal from "../Auth/LoginFormModal";
import "./Navigation.css";

const Navigation = ({ isLoaded, sessionUser }) => {
  // const sessionUser = useSelector((state) => state.session.user);
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;
    const closeMenu = () => setShowMenu(false);
    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <div className="navbar-buttons-li">
          <div id="create-post-button">
            <CreatePostFormModal />
          </div>

          <div id="profile-button">
            <ProfileButton user={sessionUser} />
          </div>
        </div>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <div className="session-buttons-nli">
          <div id="signup-button">
            <SignupFormModal />
          </div>

          <div id="login-button">
            <LoginFormModal />
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="navigation">
        <div className="navigation-wrap">
          <div className="navigation-bar">
            <NavLink exact to="/">
              <div className="treebnb">
                <img
                  className="green-airbnb-logo"
                  src="https://res.cloudinary.com/duvgdb8rd/image/upload/v1666469050/airbnb-xxl_ep5w6c.png"
                  alt="logo-1"
                ></img>
                <div className="atlas-text">atlas*</div>
              </div>
            </NavLink>

            <div>{isLoaded && sessionLinks}</div>
          </div>
        </div>
      </div>

      {/* <div className="footer-bar-wrap">
        <div id="footer-left">
          <div id="created-by-name">
            2022 Created and Styled by Kristopher Han
          </div>
          <div id="social-icons">
            <a href="https://github.com/krispikris" target="_blank">
              <i id="github-icon" className="fa-brands fa-github"></i>
            </a>

            <a href="https://www.linkedin.com/in/kristopherhan" target="_blank">
              <i id="linkedin-icon" className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Navigation;

// return (
//   <nav>
//     <ul>
//       <li>
//         <NavLink to="/" exact={true} activeClassName="active">
//           Home
//         </NavLink>
//       </li>
//       <li>
//         <NavLink to="/login" exact={true} activeClassName="active">
//           Login
//         </NavLink>
//       </li>
//       <li>
//         <NavLink to="/sign-up" exact={true} activeClassName="active">
//           Sign Up
//         </NavLink>
//       </li>
//       <li>
//         <NavLink to="/users" exact={true} activeClassName="active">
//           Users
//         </NavLink>
//       </li>
//       <li>
//         <LogoutButton />
//       </li>
//     </ul>
//   </nav>
// );
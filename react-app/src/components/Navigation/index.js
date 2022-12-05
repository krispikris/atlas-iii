// react-app/src/components/Navigation/index.js
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

// when logged in
import CreatePostFormModal from "../Posts/CreatePostFormModal";
import ProfileButton from "./ProfileButton";

// on splash (not logged)
import SignupFormModal from "../SignupFormModal";
import LoginFormModal from "../LoginFormModal";
import "./Navigation.css";

const Navigation = ({ isLoaded, sessionUser }) => {
  // const sessionUser = useSelector((state) => state.session.user);
  const [showMenu, setShowMenu] = useState(false);

  // const openMenu = () => {
  //   if (showMenu) return;
  //   setShowMenu(true);
  // };

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
        <div className="navbar-buttons-nli">
          <div id="login-button">
            <LoginFormModal />
          </div>
          <div id="signup-button"></div>
          <SignupFormModal />
        </div>
      </>
    );
  }

  return (
    <>
      {!sessionUser && (
        <div class="splash-page-container">
          <div class="a-navbar-nli">
            <div id="a1-logo-orange-nli">
              <NavLink id="a1a-logo" exact to="/">
                <img
                  id="a1a-logo-nli"
                  src="https://res.cloudinary.com/duvgdb8rd/image/upload/v1670025206/atlas/Logos/atlas-white_axgxek.png"
                ></img>
              </NavLink>
            </div>

            <div id="a2-login-and-signup">{isLoaded && sessionLinks}</div>
          </div>

          <div class="b-splash-photo">
            <img
              id="b1-splash-nli-northern-lights"
              src="https://res.cloudinary.com/duvgdb8rd/image/upload/v1670160054/atlas/Post%20-%20Photos/posts-extra/1-cropped_e6rzye.jpg"
            ></img>
          </div>

          <div class="b-splash-photo-text">
            <h1 id="b1-a-splah-nli-title-1">
              Explore, plan, and visualize your next photography adventure.
            </h1>
            <h3 id="b1-a-splah-nli-title-2">
              Discover a world of individual photography travel experiences
              curated by photograhers like you.
            </h3>
          </div>

          <div className="footer-bar-wrap-nli">
            <div id="footer-left-nli"></div>

            <div className="footer-bar-middle-nli">
              <div id="created-by-name-nli">
                2022 Created and Styled by Kristopher Han ·
              </div>
            </div>

            <div className="social-icons-nli">
              <a href="https://github.com/krispikris">
                <img
                  id="github-icon-nli"
                  src="https://res.cloudinary.com/duvgdb8rd/image/upload/v1670217411/atlas/Icons/github-logo_nnsiqn.png"
                  alt="gh"
                ></img>
              </a>
              <a href="https://www.linkedin.com/in/kristopherhan">
                <img
                  id="linkedin-icon-nli"
                  src="https://res.cloudinary.com/duvgdb8rd/image/upload/v1670217411/atlas/Icons/linkedin_dzqjrb.png"
                  alt="li"
                ></img>
              </a>
            </div>
          </div>
        </div>
      )}

      {sessionUser && (
        <div class="a-navbar-li">
          <div id="a1-logo-orange">
            <NavLink id="a1a-logo" exact to="/discover">
              <img
                id="a1a-logo-li"
                src="https://res.cloudinary.com/duvgdb8rd/image/upload/v1670025206/atlas/Logos/atlas-burnt_mlh2yx.png"
              ></img>
            </NavLink>
          </div>

          <div id="a2-upload-and-profile">{isLoaded && sessionLinks}</div>

          {/* <div className="footer-bar-wrap-li">
            <div id="footer-left-li"></div>

            <div className="footer-bar-middle-li">
              <div id="created-by-name-li">
                2022 Created and Styled by Kristopher Han ·
              </div>
            </div>

            <div className="social-icon-li">
              <a href="https://github.com/krispikris">
                <img
                  id="github-icon-li"
                  src="https://res.cloudinary.com/duvgdb8rd/image/upload/v1670217411/atlas/Icons/github-logo_nnsiqn.png"
                  alt="gh"
                ></img>
              </a>
              <a href="https://www.linkedin.com/in/kristopherhan">
                <img
                  id="linkedin-icon-li"
                  src="https://res.cloudinary.com/duvgdb8rd/image/upload/v1670217411/atlas/Icons/linkedin_dzqjrb.png"
                  alt="li"
                ></img>
              </a>
            </div>
          </div> */}
        </div>
      )}
    </>
  );
};

export default Navigation;

// return (
//   <>
//     <div className="navigation">
//       <div className="navigation-bar">
//         <NavLink exact to="/discover">
//           <div className="atlas">
//             <img
//               className="atlas-logo"
//               src="https://res.cloudinary.com/duvgdb8rd/image/upload/v1670025206/atlas/Logos/atlas-burnt_mlh2yx.png"
//               alt="logo-1"
//             ></img>
//           </div>
//         </NavLink>

//         <div>{isLoaded && sessionLinks}</div>
//       </div>
//     </div>
//   </>
// );

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

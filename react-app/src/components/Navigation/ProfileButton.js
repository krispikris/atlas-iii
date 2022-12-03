// frontend/src/components/Navigation/ProfileButton.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import "./ProfileButton.css";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  <img
    id="a1a-logo"
    src="https://res.cloudinary.com/duvgdb8rd/image/upload/v1670025206/atlas/Logos/atlas-burnt_mlh2yx.png"
  ></img>;

  return (
    <>
      <div class="a2b-2-pic-username-container">
        <div class="a2b-2a-profile-pic">
          <img id="a2b-2b-profile-pic" src={user.profile_photo}></img>
        </div>
        <div class="a2b-3-username" onClick={openMenu}>
          {user.username}
        </div>
      </div>

      {showMenu && (
        <div className="a2b-profile-dropdown-menu">
          <div id="a2b-1-pd-1">My Profile</div>
          <hr></hr>
          <div id="a2b-1-pd-2" onClick={logout}>
            Logout
          </div>
        </div>
      )}
    </>
  );
}

export default ProfileButton;

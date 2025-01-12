import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { firebaseAuth } from "../../firebase";
import logo from "../../images/gym.svg";
import profileLogo from "../../images/profile.svg";
import { Popover } from "antd";

import "./Header.scss";

const Header = ({ history, location }) => {
  const [togglePopover, setTogglePopOver] = useState(false);

  const userDetails = useSelector((state) => state.user.details);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  const handleLogout = () => {
    firebaseAuth.signOut();
    navigate("/login");
  };

  const getProfileContent = () => (
    <ul className="profile__card">
      <li className="profile__card--item">
        <span className="body-text profile-name">
          {userDetails?.displayName}
        </span>
        <span>{userDetails?.email}</span>
      </li>
      <li className="profile__card--item clickable">
        <span onClick={handleLogout}>Logout</span>
      </li>
    </ul>
  );

  return (
    <header className="app__header">
      <div className="short__logo">
        <figure className="u-text-center brand-logo-container">
          <img src={logo} alt="Brand logo" className="brand__logo" />
        </figure>
      </div>
      <div className="app__header--item header__wrapper">
        <h2
          className="heading-5 header--item logo__wrapper custom-font"
          onClick={handleClick}
        >
          {"Heyy FIT.."}
        </h2>
        <figure className="header--item app--profile u-text-center">
          <Popover
            content={getProfileContent()}
            trigger="click"
            placement="bottomRight"
            visible={togglePopover}
            overlayClassName="logout-popup"
            onVisibleChange={() => setTogglePopOver(!togglePopover)}
          >
            <img
              src={userDetails?.photoURL || profileLogo}
              alt="Profile logo"
              className="profile_logo"
            />
          </Popover>
        </figure>
      </div>
    </header>
  );
};

export default Header;

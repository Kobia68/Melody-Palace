import React from "react";
import 'boxicons';
import './Navbar.css'

export const Navbar = () => {
  return (
    <div className="navigation-bar">
      <div className="logo">Melody Palace</div>

      <div className="nav-links">
          <li>Palace</li>
          <li>
            <button className="profile-btn">
              <box-icon type="solid" name="user-circle"></box-icon>
              <p>Profile</p>
            </button>
          </li>
      </div>
    </div>
  );
};

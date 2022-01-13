/** @format */

import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG "
      />
      <div className="header__search">
        <input className="header__searchInput" type="text" />
      </div>
      ""
      <div className="header__nav"></div>
    </div>
  );
};

export default Header;

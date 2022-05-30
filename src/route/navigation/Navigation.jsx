import { useState } from "react";

import "./navigationStyle.css";

const Navigation = () => {
  const [hamburgerActive, setHamburgerActive] = useState(false);
  const hamburgerBtnHandler = () => {
    setHamburgerActive(!hamburgerActive);
  };
  return (
    <nav className="navBar">
      <div className="navContainer">
        <h1>Logo</h1>
        <div className="menu">
          <a href="./#" className="isActive">
            Home
          </a>
          <a href="./#">Store</a>
          <a href="./#">Sign In</a>
          <a href="./#">Icon</a>
        </div>
        <button
          className={`hamburger ${hamburgerActive ? "isActive" : null}`}
          onClick={hamburgerBtnHandler}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;

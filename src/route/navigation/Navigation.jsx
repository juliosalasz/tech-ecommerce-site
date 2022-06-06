import { useState, useEffect, Fragment } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

import "./navigationStyle.css";

const Navigation = () => {
  //Responsive Hamburger
  const [hamburgerActive, setHamburgerActive] = useState(false);
  const hamburgerBtnHandler = () => {
    setHamburgerActive(!hamburgerActive);
  };

  //Router Background color
  const [navBg, setNavBg] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      setNavBg(true);
    } else {
      setNavBg(false);
    }
  }, [location]);

  const navClass = navBg ? "navContainerHome" : "navContainerInterior";

  //Background color for scrolling
  const [navScroll, setNavScroll] = useState(false);
  const colorHandler = () => {
    if (window.scrollY >= 100) {
      setNavScroll(true);
    } else {
      setNavScroll(false);
    }
  };

  window.addEventListener("scroll", colorHandler);

  const navScrollClass = navScroll ? "backgroundWhite" : " ";

  return (
    <Fragment>
      <nav className="navBar">
        <div className={`navContainer ${navClass} ${navScrollClass}`}>
          <h1>Logo</h1>
          <div className="menu">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <a href="./#">Sign In</a>
            <a href="./#">Icon</a>
          </div>
          <button
            className={`hamburger ${hamburgerActive ? "isActive" : null}`}
            onClick={hamburgerBtnHandler}
          >
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <span></span>
          </button>
        </div>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

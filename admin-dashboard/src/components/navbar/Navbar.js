import React from "react";
import "./navbar.scss";
import { ChangeTheme } from "../../context/ThemeContext";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const Navbar = () => {
  const { theme, setTheme } = ChangeTheme();

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`navbar ${theme}`}>
      <div className="logo">
        <img src="logo.svg" alt="logo" />
        <span>Dashboard</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="icon" className="icon" />
        <img src="/app.svg" alt="icon" className="icon" />
        <img src="/expand.svg" alt="icon" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="icon" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt="user"
          />
          <span>Jane</span>
        </div>
        <img src="/settings.svg" alt="icon" className="icon" />

        <button className="themeButton" onClick={handleClick}>
          {theme === "light" ? (
            <BsFillMoonStarsFill className="moon" />
          ) : (
            <BsFillSunFill className="sun" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;

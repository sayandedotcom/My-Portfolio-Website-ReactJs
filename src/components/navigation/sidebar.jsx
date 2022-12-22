import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import navLinks from "./navLinks";
import "./navigation.css";
const Sidebar = ({ click, setClick }) => {
  const darkMode = useSelector((state) => state.theme.value);
  !click
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");
  return (
    <div>
      <div
        className={` overlay ${click ? "" : "overlay-active"}`}
        onClick={() => setClick(!click)}
      ></div>
      <div
        className={` sidebar ${click ? "" : "sidebar-active"} ${
          darkMode ? "navbar-dark" : "navbar-light"
        }`}
      >
        {navLinks.map(({ to, name, icon }, index) => (
          <NavLink
            className="sidebar-link"
            to={to}
            onClick={() => setClick(!click)}
          >
            {icon}&nbsp;
            {name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

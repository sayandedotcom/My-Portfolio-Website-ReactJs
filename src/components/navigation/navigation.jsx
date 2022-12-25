import React, { useState, useEffect } from "react";
import "./navigation.css";
import { Grid, Tooltip } from "@mui/material";
import { Link, NavLink, Outlet } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { FaMapMarkedAlt, FaEnvelope } from "react-icons/fa";
import navLinks from "./navLinks";
import footerLinks from "./footerLinks";
import GotoButton from "../gotobutton/gotobutton";
import Sig from "./signature";
import { useDispatch, useSelector } from "react-redux";
import Toggle from "./toggle";
import { resize } from "../../store/slice/windowlice";
import Sidebar from "./sidebar";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import GlobalStyles from "../../index.styles";
function Navigation() {
  const darkMode = useSelector((state) => state.theme.value);

  useEffect(() => {
    localStorage.setItem("dark-mode", JSON.stringify(darkMode));
  }, [darkMode]);

  const [click, setClick] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);

  const dispatch = useDispatch();
  dispatch(resize(width));

  const windowSize = useSelector((state) => state.window.breakpoint);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <>
      <GlobalStyles darkMode={darkMode} />
      <>
        <nav className={`navbar ${darkMode ? "navbar-dark" : "navbar-light"}`}>
          <Grid container>
            <Grid item lg={5} md={9} sm={5} xs={8.2} className="logo-gird">
              <Tooltip title="Go Home" followCursor arrow>
                <Link className="logo" to="/" onClick={() => setClick(!click)}>
                  {/* <h1>&lt;&nbsp;</h1>
                  <h1>Sayan De</h1>
                  <h1>&nbsp;/&gt;</h1> */}
                  <Sig />
                </Link>
              </Tooltip>
            </Grid>
            <Grid
              item
              lg={7}
              md={3}
              sm={7}
              xs={3.8}
              className="nav-links-container"
            >
              {windowSize < 1200 ? (
                <div className="toggle-drawer">
                  <Toggle />
                  <div className="menu" onClick={() => setClick(!click)}>
                    {click ? <MenuRoundedIcon /> : <CloseRoundedIcon />}
                  </div>
                  <Sidebar click={click} setClick={setClick} />
                </div>
              ) : (
                <>
                  {navLinks.map(({ to, name, icon }, index) => (
                    <Tooltip key={index} title={name} placement="bottom" arrow>
                      <NavLink className="nav-link" to={to}>
                        {icon}&nbsp;
                        {name}
                      </NavLink>
                    </Tooltip>
                  ))}
                  <Toggle />
                </>
              )}
            </Grid>
          </Grid>
        </nav>
        <hr className="horizontal-line" />
      </>

      <Outlet />

      <footer className={`footer ${darkMode ? "footer-dark" : "footer-light"}`}>
        <hr className="horizontal-line" />
        <Grid container p={3}>
          <Grid item lg={4} md={4} sm={12} xs={12} p={4}>
            <h1 className="footer-heading">My Portfolio</h1>
            <hr className="horizontal-line" />
            <br />
            <p style={{ fontWeight: "600" }}>
              Thank you for visiting my personal portfolio website. Connect with
              me over socials.
              <br />
              <br />
              Please wait for a while all major projects will be listed soon.
              Till then keep visiting. Connect with me over chat or message me !
            </p>
          </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12} p={4}>
            <h1 className="footer-heading">Quick Links</h1>
            <hr className="horizontal-line" />
            <br />
            {footerLinks.map(
              ({ id, name, href, fonts }) =>
                id <= 6 && (
                  <a key={id} className="quick-links" href={href}>
                    {fonts}
                    &nbsp;{name}
                  </a>
                )
            )}
          </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12} p={4}>
            {" "}
            <h1 className="footer-heading">Contact Info</h1>
            <hr className="horizontal-line" />
            <br />
            <h3 style={{ display: "flex", alignItems: "center" }}>
              <FaEnvelope />
              &nbsp; sayandeten@gmail.com
            </h3>
            <h3 style={{ display: "flex", alignItems: "center" }}>
              <FaMapMarkedAlt /> &nbsp; Kolkata, India-700 061
            </h3>
            <div className="footer-icons">
              {" "}
              {footerLinks.map(
                ({ id, name, href, fonts }) =>
                  id > 6 && (
                    <a key={id} href={href} target="blank">
                      {fonts}
                    </a>
                  )
              )}
            </div>
            <GotoButton />
          </Grid>
          <Grid
            item
            lg={12}
            md={12}
            sm={12}
            xs={12}
            sx={{ textAlign: "center" }}
          >
            <hr className="horizontal-line" />
            <h5
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "2%",
              }}
            >
              Developed & Designed With&nbsp;
              <FavoriteIcon sx={{ color: "#eb3341", fontSize: "1rem" }} />
              &nbsp;By Sayan De
            </h5>
          </Grid>
        </Grid>
      </footer>
    </>
  );
}

export default Navigation;

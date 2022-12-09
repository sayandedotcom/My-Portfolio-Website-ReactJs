import React, { useState } from "react";
import "./navigation.css";
import { Grid, Tooltip, useTheme, useMediaQuery } from "@mui/material";
import { Link, NavLink, Outlet } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { FaMapMarkedAlt, FaEnvelope } from "react-icons/fa";
import navLinks from "./navLinks";
import footerLinks from "./footerLinks";
import Drawer from "./drawer";
import GotoButton from "../gotobutton/gotobutton";
import Sig from "./signature2";
// import Toggle from "./toggle";
function Navigation() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const [isDarkMode, setDarkMode] = useState(false);
  return (
    <>
      {/* Navtigation Bar Starts */}
      <>
        <div className="navbar" theme={isDarkMode ? "dark" : ""}>
          <Grid container>
            <Grid item lg={6} md={9} sm={5} xs={8.2}>
              <Tooltip title="Go Home" placement="bottom-end" arrow>
                <Link className="logo" to="/">
                  <h1>&lt;&nbsp;</h1>
                  <h1>Sayan De</h1>
                  <h1>&nbsp;/&gt;</h1>
                  {/* <Sig /> */}
                </Link>
              </Tooltip>
            </Grid>
            <Grid
              item
              lg={6}
              md={3}
              sm={7}
              xs={3.8}
              className="nav-links-container"
            >
              {isMatch ? (
                <>
                  <Tooltip
                    title={`Switch to ${
                      isDarkMode ? "Light Mode" : "Dark Mode"
                    }`}
                    placement="bottom"
                    arrow
                  >
                    <div
                      className="toggle"
                      onClick={() => setDarkMode(!isDarkMode)}
                    >
                      <div
                        className={`circle ${isDarkMode ? "toggleactive" : ""}`}
                      ></div>
                    </div>
                  </Tooltip>
                  <Drawer navLinks={navLinks} />
                </>
              ) : (
                <>
                  {navLinks.map(({ to, name }, index) => (
                    <Tooltip key={index} title={name} placement="bottom" arrow>
                      <NavLink className="nav-link" to={to}>
                        {name}
                      </NavLink>
                    </Tooltip>
                  ))}
                  <Tooltip
                    title={`Switch to ${
                      isDarkMode ? "Light Mode" : "Dark Mode"
                    }`}
                    placement="bottom-end"
                    arrow
                  >
                    <div
                      className="toggle"
                      onClick={() => setDarkMode(!isDarkMode)}
                    >
                      <div
                        className={`circle ${isDarkMode ? "toggleactive" : ""}`}
                      ></div>
                    </div>
                  </Tooltip>
                </>
              )}
            </Grid>
          </Grid>
        </div>
        <hr className="horizontal-line" />
      </>
      {/* Navtigation Bar ENds */}

      <Outlet />

      {/* Footer Bar Starts */}

      <footer className="footer" theme={isDarkMode ? "dark" : ""}>
        <hr className="horizontal-line" />
        <Grid container p={3}>
          <Grid item lg={4} md={4} sm={12} xs={12} p={4}>
            <h1 className="footer-heading">My Portfolio</h1>
            <hr className="horizontal-line" />
            <br />
            <h4>
              Thank you for visiting my personal portfolio website. Connect with
              me over socials.
              <br />
              <br />
              Please wait for a while all major projects will be listed soon.
              Till then keep visiting. Connect with me over live chat!
            </h4>
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
            {footerLinks.map(
              ({ id, name, href, fonts }) =>
                id > 6 && (
                  <a key={id} href={href} target="blank">
                    {fonts}
                  </a>
                )
            )}
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
            <h6 style={{ display: "flex", justifyContent: "center" }}>
              Developed & Designed With&nbsp;
              <FavoriteIcon sx={{ color: "#eb3341", fontSize: "0.8rem" }} />
              &nbsp;By Sayan De
            </h6>
            <hr className="horizontal-line" />
          </Grid>
        </Grid>
      </footer>

      {/* Footer Bar Starts */}
    </>
  );
}

export default Navigation;

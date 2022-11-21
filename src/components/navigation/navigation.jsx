import React from "react";
import "./navigation.css";
import { AppBar, Toolbar, Grid, Box, Tooltip } from "@mui/material";
import { Link, NavLink, Outlet } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { FaMapMarkedAlt, FaEnvelope } from "react-icons/fa";
import navLinks from "./navLinks";
import footerLinks from "./footerLinks";
function Navigation() {
  return (
    <>
      <AppBar position="static" color="default">
        <Toolbar>
          <Grid container>
            <Grid item xs={6}>
              <Tooltip title="Go Home" placement="bottom-end" arrow>
                <Link className="logo" to="/">
                  <h1>&lt;&nbsp;</h1>
                  <h1>Sayan De</h1>
                  <h1>&nbsp;/&gt;</h1>
                </Link>
              </Tooltip>
            </Grid>
            <Grid item xs={6} className="nav-links-container">
              {navLinks.map(({ to, name }, index) => (
                <Tooltip key={index} title={name} placement="bottom-end" arrow>
                  <NavLink className="nav-link" to={to}>
                    {name}
                  </NavLink>
                </Tooltip>
              ))}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <Outlet />

      <footer style={{ backgroundColor: "#00012b", color: "white" }}>
        <Grid container p={6}>
          <Grid item lg={4} md={4} sm={12} xs={12} p={4}>
            <Box>
              <h1 className="footer-heading">Sayan's Portfolio</h1>
              <hr style={{ borderTop: "1px solid white" }} />
              <br />
              <h3>
                Thank you for visiting my personal portfolio website. Connect
                with me over socials.
                <h1> </h1>
                <br />
                Please wait for a while all major projects will be listed soon.
                Till then keep visiting. Connect with me over live chat!
              </h3>
            </Box>
          </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12} p={4}>
            <Box>
              <h1 className="footer-heading">Quick Links</h1>
              <hr style={{ borderTop: "1px solid white" }} />
              <br />
              {footerLinks.map(
                ({ id, name, href, fonts }) =>
                  id <= 6 && (
                    <a className="quick-links" href={href}>
                      {fonts}
                      &nbsp;{name}
                    </a>
                  )
              )}
            </Box>
          </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12} p={4}>
            <Box>
              {" "}
              <h1 className="footer-heading">Contact Info</h1>
              <hr style={{ borderTop: "1px solid white" }} />
              <br />
              <h3>
                <FaEnvelope />
                &nbsp; sayandeten@gmail.com
              </h3>
              <h3>
                <FaMapMarkedAlt /> &nbsp;Kolkata, India-700 061
              </h3>
              {footerLinks.map(
                ({ id, name, href, fonts }) =>
                  id > 6 && (
                    <a href={href} target="blank">
                      {fonts}
                    </a>
                  )
              )}
            </Box>
          </Grid>
          <Grid
            item
            lg={12}
            md={12}
            sm={12}
            xs={12}
            sx={{ textAlign: "center" }}
          >
            <h4>
              Developed & Designed With&nbsp;
              <FavoriteIcon sx={{ color: "#eb3341", fontSize: "1.2rem" }} />
              &nbsp;By Sayan De
            </h4>
            <hr style={{ borderBottom: "1px solid white" }} />
          </Grid>
        </Grid>
      </footer>
    </>
  );
}

export default Navigation;

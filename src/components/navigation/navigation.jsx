import React from "react";
import "./navigation.css";
import {
  AppBar,
  Toolbar,
  Grid,
  Box,
  Tooltip,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Link, NavLink, Outlet } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { FaMapMarkedAlt, FaEnvelope } from "react-icons/fa";
import navLinks from "./navLinks";
import footerLinks from "./footerLinks";
import Drawer from "./drawer";
function Navigation() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <AppBar position="static" color="default">
        <Toolbar>
          <Grid container>
            <Grid item lg={6} md={6} sm={5} xs={7}>
              <Tooltip title="Go Home" placement="bottom-end" arrow>
                <Link className="logo" to="/">
                  <h1>&lt;&nbsp;</h1>
                  <h1>Sayan De</h1>
                  <h1>&nbsp;/&gt;</h1>
                </Link>
              </Tooltip>
            </Grid>
            <Grid
              item
              lg={6}
              md={6}
              sm={7}
              xs={5}
              className="nav-links-container"
            >
              {isMatch ? (
                <Drawer navLinks={navLinks} />
              ) : (
                navLinks.map(({ to, name }, index) => (
                  <Tooltip
                    key={index}
                    title={name}
                    placement="bottom-end"
                    arrow
                  >
                    <NavLink className="nav-link" to={to}>
                      {name}
                    </NavLink>
                  </Tooltip>
                ))
              )}
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
              <h4>
                Thank you for visiting my personal portfolio website. Connect
                with me over socials.
                <br />
                <br />
                Please wait for a while all major projects will be listed soon.
                Till then keep visiting. Connect with me over live chat!
              </h4>
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
                    <a key={id} className="quick-links" href={href}>
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
                    <a key={id} href={href} target="blank">
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
            <h6 style={{ display: "flex", justifyContent: "center" }}>
              Developed & Designed With&nbsp;
              <FavoriteIcon sx={{ color: "#eb3341", fontSize: "0.8rem" }} />
              &nbsp;By Sayan De
            </h6>
            <hr style={{ borderBottom: "1px solid white" }} />
          </Grid>
        </Grid>
      </footer>
    </>
  );
}

export default Navigation;

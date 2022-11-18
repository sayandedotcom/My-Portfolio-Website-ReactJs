import React from "react";
import "./navigation.css";
import { AppBar, Toolbar, Grid, Box } from "@mui/material";
import { Link, NavLink, Outlet } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  FaChevronCircleRight,
  FaMapMarkedAlt,
  FaEnvelope,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";

function Navigation() {
  return (
    <>
      <AppBar position="static" color="default" sx={{ boxShadow: "none" }}>
        <Toolbar>
          <Grid container>
            <Grid item xs={6}>
              <Link className="logo" to="/">
                <h1>&lt;</h1>
                <h1>Sayan De</h1>
                <h1>/&gt;</h1>
              </Link>
            </Grid>
            <Grid item xs={6} className="nav-links-container">
              <NavLink className="nav-link" to="about">
                About Me
              </NavLink>
              <NavLink className="nav-link" to="skills">
                {" "}
                Skills
              </NavLink>
              <NavLink className="nav-link" to="education">
                {" "}
                Education
              </NavLink>
              <NavLink className="nav-link" to="projects">
                {" "}
                Projects
              </NavLink>
              <NavLink className="nav-link" to="contactme">
                {" "}
                Contact Me
              </NavLink>
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

              <a className="quick-links" href="/">
                <FaChevronCircleRight />
                &nbsp;Home
              </a>
              <a className="quick-links" href="/about">
                <FaChevronCircleRight />
                &nbsp;About
              </a>
              <a className="quick-links" href="/skills">
                <FaChevronCircleRight />
                &nbsp;Skills
              </a>
              <a className="quick-links" href="/education">
                <FaChevronCircleRight />
                &nbsp;Education
              </a>
              <a className="quick-links" href="/projects">
                <FaChevronCircleRight />
                &nbsp;Projects
              </a>
              <a className="quick-links" href="/contactme">
                <FaChevronCircleRight />
                &nbsp;Contact Me
              </a>
            </Box>
          </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12} p={4}>
            <Box>
              {" "}
              <h1 className="footer-heading">Contact Info</h1>
              <h3>
                <FaEnvelope />
                &nbsp; sayandeten@gmail.com
              </h3>
              <h3>
                <FaMapMarkedAlt /> &nbsp;Kolkata, India-700 061
              </h3>
              <a href="https://www.facebook.com/profile.php?id=100010494277272">
                <FaFacebook className="fonts" />
              </a>
              <a href="https://www.instagram.com/sayande._/">
                <FaInstagram className="fonts" />
              </a>
              <a href="https://twitter.com/sayande2002">
                <FaTwitter className="fonts" />
              </a>
              <a href="https://github.com/sayande2002">
                <FaGithub className="fonts" />
              </a>
              <a href="https://www.linkedin.com/in/sayande/">
                <FaLinkedin className="fonts" />
              </a>
              <a href="mailto:sayandeten@gmail.com">
                <FaEnvelope className="fonts" />
              </a>
              <a href="https://wa.me/+917439891451">
                <FaWhatsapp className="fonts" />
              </a>
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
              Designed With{" "}
              <FavoriteIcon sx={{ color: "#eb3341", fontSize: "0.9rem" }} /> By
              Sayan De
            </h4>
            <hr />
          </Grid>
        </Grid>
      </footer>
    </>
  );
}

export default Navigation;

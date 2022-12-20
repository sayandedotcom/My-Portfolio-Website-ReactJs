import React, { useEffect } from "react";
import { Grid, Tooltip } from "@mui/material";
import { useSelector } from "react-redux";
import Sayan from "../../assests/My project-removebg-preview.jpg";
import India from "./India";
import socialLight from "./social-light-links";
import socialDark from "./social-dark-links";
import "./home.css";
export default function Home() {
  useEffect(() => {
    document.title = "Sayan De | Home";
  }, []);
  const darkMode = useSelector((state) => state.theme.value);
  return (
    <Grid container className={`home ${darkMode ? "home-dark" : "home-light"}`}>
      <Grid item lg={6} md={6} sm={12} xs={12} p={4}>
        <div className="home-heading">
          Hi, I'm{" "}
          <span>
            Sayan De <India />
          </span>
        </div>
        <br />
        <h3 className="home-paragraph">
          Welcome to my Website. I am a third year student studying Bachelor's
          in Computer Application [BCA] at the Future Institute of Engineering
          and Management . I'm passionate in Front-End Development, Open Source
          Projects, Software Development and community activities.
          <br />
          <br />I am a Self-Taught Developer With A Passion For Web Development
          And Problem Solving. I Have A Strong Background in Software
          Development And Have Worked On A Wide Variety Of Projects.
          <br />
          {/* <br />
          Looking for a challenging role in a reputable organization to use my
          skills and knowledge. Being a fast learner, I would like to learn and
          earn in order to meet the common objectives of the organization as a
          whole by utilizing a positive approach in everything that I do. */}
        </h3>
        <br />
        <h2 className="home-connect">Connect with me here :)</h2>
        {darkMode ? (
          <>
            {socialDark.map(({ name, link, fonts }, index) => (
              <Tooltip key={index} title={name} placement="bottom" arrow>
                <a href={link} target="blank">
                  {fonts}
                </a>
              </Tooltip>
            ))}
          </>
        ) : (
          <>
            {socialLight.map(({ name, link, src }, index) => (
              <a key={index} href={link} target="blank">
                <Tooltip title={name} placement="bottom" arrow>
                  <img className="home-light-icons" src={src} alt={name} />
                </Tooltip>
              </a>
            ))}
          </>
        )}
      </Grid>
      <Grid item lg={6} md={6} sm={12} xs={12} className="home-image">
        <img src={Sayan} alt="SayanImage" />
      </Grid>
    </Grid>
  );
}

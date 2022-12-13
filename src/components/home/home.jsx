import React, { useEffect } from "react";
import { Grid, Tooltip } from "@mui/material";
import Sayan from "../../assests/My project-removebg-preview.jpg";
import "./home.css";
import India from "./India";
import links from "./links";
export default function Home() {
  useEffect(() => {
    document.title = "Sayan De | Home";
  }, []);
  return (
    <Grid container className="home">
      <Grid item lg={6} md={6} sm={12} xs={12} p={5}>
        <div className="home-heading">
          Hi, I'm{" "}
          <span>
            Sayan De <India />
          </span>
        </div>

        <br />
        <h3 className="home-paragraph">
          Welcome to my Website. I am a senior studying Bachelor's in Computer
          Application [BCA] at the Future Institute of Engineering and
          Management . I'm passionate in Front-End Development, Open Source
          Projects, Software Development and community activities.
          <br />
          <br />I Am A Self-Taught Developer With A Passion For Web Development
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
        <h2 style={{ color: "#0984ad" }}>Connect with me here :)</h2>

        {links.map(({ name, link, src }, index) => (
          <a key={index} href={link} target="blank">
            <Tooltip title={name} placement="bottom-start" arrow>
              <img
                className="icons"
                src={src}
                alt={name}
                // onClick={() => (window.location.href = (link, "blank"))}
              />
            </Tooltip>
          </a>
        ))}
      </Grid>
      <Grid item lg={6} md={6} sm={12} xs={12}>
        <div className="image">
          <img src={Sayan} alt="SayanImage" />
        </div>
      </Grid>
    </Grid>
  );
}

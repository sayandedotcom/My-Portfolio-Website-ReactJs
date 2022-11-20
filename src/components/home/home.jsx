import React from "react";
import { Grid, Tooltip } from "@mui/material";
import Sayan from "../../assests/My project-removebg-preview.jpg";
import "./home.css";
import links from "./links";
export default function Home() {
  return (
    <Grid container className="home">
      <Grid item lg={6} md={6} sm={12} xs={12} p={5}>
        <h1 className="home-heading">
          Hi, I'm <span>Sayan De</span>
        </h1>
        <br />
        <h2 className="home-paragraph">
          Welcome to my Website. I am a senior studying Computer Science at the
          Future Institute of Engineering and Management 👩‍💻. I'm passionate in
          Front-End Development, Open Source Projects, Software Development and
          community activities 🤩.
          <h1> </h1>
          <br />I Am A Self-Taught Developer With A Passion For Web Development
          And Problem Solving. I Have A Strong Background in Software
          Development And Have Worked On A Wide Variety Of Projects.
          <h1> </h1>
          {/* <br />
          Looking for a challenging role in a reputable organization to use my
          skills and knowledge. Being a fast learner, I would like to learn and
          earn in order to meet the common objectives of the organization as a
          whole by utilizing a positive approach in everything that I do. */}
        </h2>
        <h1> </h1>
        <br />
        <h2 style={{ color: "#0984ad" }}>Connect With me here :)</h2>
        {links.map(({ id, name, link, src }) => (
          <a key={id} href={link} target="blank">
            <Tooltip title={name} placement="bottom-start" arrow>
              <img className="icons" src={src} alt={name} />
            </Tooltip>
          </a>
        ))}
      </Grid>
      <Grid item lg={6} md={6} sm={12} xs={12}>
        <div class="image">
          <img src={Sayan} alt="SayanImage" />
        </div>
      </Grid>
    </Grid>
  );
}

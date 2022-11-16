import { Grid } from "@mui/material";
import React from "react";
import Sayan from "../../assests/My project-removebg-preview.jpg";
import "./home.css";
import links from "./links";
export default function Home() {
  return (
    <Grid container>
      <Grid item lg={6} md={6} sm={12} xs={12} p={5}>
        <h1 style={{ fontSize: "5rem" }}>Hi, I'm Sayan De</h1>
        <h2 style={{ fontSize: "1.5rem" }}>
          Welcome to my Website. I am a senior studying Computer Science at the
          Future Institute of Engineering and Management 👩‍💻. I'm passionate in
          Front-End Development, Open Source Projects, Software Development and
          community activities 🤩.
          <h1> </h1>
          <br />I Am A Self-Taught Developer With A Passion For Web Development
          And Problem Solving. I Have A Strong Background in Software
          Development And Have Worked On A Wide Variety Of Projects.
          <h1> </h1>
          <br />
          Looking for a challenging role in a reputable organization to use my
          skills and knowledge. Being a fast learner, I would like to learn and
          earn in order to meet the common objectives of the organization as a
          whole by utilizing a positive approach in everything that I do.
        </h2>

        {links.map(({ id, name, link, src }) => (
          <a key={id} href={link} target="blank">
            <img className="icons" src={src} alt={name} />
          </a>
        ))}
      </Grid>
      <Grid item lg={6} md={6} sm={12} xs={12}>
        <section class="about" id="about">
          <div class="row">
            <div class="image">
              <img className="tilt" src={Sayan} alt="" />
            </div>
          </div>
        </section>
      </Grid>
    </Grid>
  );
}

import React from "react";
import { Grid, LinearProgress } from "@mui/material";
import "./skills.css";
import FrontEnd1 from "./frontend1";
import FrontEnd2 from "./frontend2";
import languages from "./languages";
import Tools from "./tools-and-frameworks";
import Subjects from "./computer-subjects";
import { FaLaptopCode } from "react-icons/fa";

export default function Skills() {
  return (
    <Grid container p={5}>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <div className="skills-heading">
          <FaLaptopCode />
          Skills & Abilities
        </div>
        <div className="skills-quote">
          <h3>
            It is possible to fly without motors, but not without knowledge and
            skill
          </h3>
        </div>
      </Grid>

      <Grid item lg={12} md={12} sm={12} xs={12} p={3}>
        <h2 className="skills-heading">
          Front-End Technologies I have worked with
        </h2>
      </Grid>
      <Grid item lg={6} md={6} sm={12} xs={12} p={3} className="skills-title">
        {FrontEnd1.map(({ id, name, src, value }) => (
          <div key={id} className="skills-box">
            <div>
              <img src={src} alt={name} />
            </div>
            <div className="skills-bar">
              <h2 className="skills-name">{name}</h2>
              <LinearProgress variant="determinate" value={value} />
            </div>
          </div>
        ))}
      </Grid>
      <Grid item lg={6} md={6} sm={12} xs={12} p={3} className="skills-title">
        {FrontEnd2.map(({ id, name, src, value }) => (
          <div key={id} className="skills-box">
            <div>
              <img src={src} alt={name} />
            </div>
            <div className="skills-bar">
              <h2 className="skills-name">{name}</h2>
              <LinearProgress variant="determinate" value={value} />
            </div>
          </div>
        ))}
      </Grid>
      <Grid item lg={12} md={12} sm={12} xs={12} p={3}>
        <h2 className="skills-heading">
          Others Technologies I have worked with
        </h2>
      </Grid>
      <Grid item lg={4} md={4} sm={12} xs={12} p={3} className="skills-title">
        <h1>Languages</h1>
        {languages.map(({ id, name, src, value }) => (
          <div key={id} className="skills-box">
            <div>
              <img src={src} alt={name} />
            </div>
            <div className="skills-bar">
              <h2 className="skills-name">{name}</h2>
              <LinearProgress variant="determinate" value={value} />
            </div>
          </div>
        ))}
      </Grid>
      <Grid item lg={4} md={4} sm={12} xs={12} p={3} className="skills-title">
        <h1>Tools & Frameworks</h1>
        {Tools.map(({ id, name, src, value }) => (
          <div key={id} className="skills-box">
            <div>
              <img src={src} alt={name} />
            </div>
            <div className="skills-bar">
              <h2 className="skills-name">{name}</h2>
              <LinearProgress variant="determinate" value={value} />
            </div>
          </div>
        ))}
      </Grid>
      <Grid item lg={4} md={4} sm={12} xs={12} p={3} className="skills-title">
        <h1>Computer Subjects</h1>
        {Subjects.map(({ id, name, src, value }) => (
          <div key={id} className="skills-box">
            <div>
              <img src={src} alt={name} />
            </div>
            <div className="skills-bar">
              <h2 className="skills-name">{name}</h2>
              <LinearProgress variant="determinate" value={value} />
            </div>
          </div>
        ))}
      </Grid>
    </Grid>
  );
}

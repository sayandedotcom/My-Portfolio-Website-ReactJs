import React from "react";
import { Grid, LinearProgress, Tooltip } from "@mui/material";
import "./skills.css";
import FrontEnd from "./frontend";
import languages from "./languages";
import Tools from "./tools-and-frameworks";
import Subjects from "./subjects";
import { FaLaptopCode } from "react-icons/fa";

export default function Skills() {
  return (
    <Grid container className="skills" p={5}>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <div className="skills-heading">
          <FaLaptopCode className="skill-icon" />
          &nbsp;Skills&nbsp;&{" "}
          <span style={{ color: "#ffe600" }}>&nbsp;Abilities</span>
        </div>
        <h3 className="skills-quote">
          It is possible to fly without motors, but not without knowledge and
          skill
        </h3>
      </Grid>

      <Grid item lg={12} md={12} sm={12} xs={12} p={2}>
        <p className="other-skills-heading">
          Front-End Technologies & libraries I have worked with
        </p>
      </Grid>

      <Grid item lg={6} md={6} sm={12} xs={12} p={3} className="skills-title">
        {FrontEnd.map(
          ({ name, src, value }, index) =>
            index < 11 && (
              <div key={index} className="skills-box">
                <img src={src} alt={name} />
                <Tooltip title={value + `${" %"}`} placement="bottom" arrow>
                  <div className="skills-bar">
                    <h2 className="skills-name">{name}</h2>
                    <LinearProgress
                      variant="determinate"
                      value={value}
                      color="info"
                    />
                  </div>
                </Tooltip>
              </div>
            )
        )}
      </Grid>

      <Grid item lg={6} md={6} sm={12} xs={12} p={3} className="skills-title">
        {FrontEnd.map(
          ({ name, src, value }, index) =>
            index >= 11 && (
              <div key={index} className="skills-box">
                <img src={src} alt={name} />
                <Tooltip title={value + `${" %"}`} placement="bottom" arrow>
                  <div className="skills-bar">
                    <h2 className="skills-name">{name}</h2>
                    <LinearProgress
                      variant="determinate"
                      value={value}
                      color="info"
                    />
                  </div>
                </Tooltip>
              </div>
            )
        )}
      </Grid>

      <Grid item lg={12} md={12} sm={12} xs={12} p={2}>
        <p className="other-skills-heading">Others</p>
      </Grid>

      <Grid item lg={4} md={4} sm={12} xs={12} p={3} className="skills-title">
        <h1 className="other-heading">Languages</h1>
        {languages.map(({ name, src, value }, index) => (
          <div key={index} className="skills-box">
            <img src={src} alt={name} />
            <Tooltip title={value + `${" %"}`} placement="bottom" arrow>
              <div className="skills-bar">
                <h2 className="skills-name">{name}</h2>
                <LinearProgress
                  variant="determinate"
                  value={value}
                  color="info"
                />
              </div>
            </Tooltip>
          </div>
        ))}
      </Grid>

      <Grid item lg={4} md={4} sm={12} xs={12} p={3} className="skills-title">
        <h1 className="other-heading">Tools & Frameworks</h1>
        {Tools.map(({ name, src, value }, index) => (
          <div key={index} className="skills-box">
            <img src={src} alt={name} />
            <Tooltip title={value + `${" %"}`} placement="bottom" arrow>
              <div className="skills-bar">
                <h2 className="skills-name">{name}</h2>
                <LinearProgress
                  variant="determinate"
                  value={value}
                  color="info"
                />
              </div>
            </Tooltip>
          </div>
        ))}
      </Grid>

      <Grid item lg={4} md={4} sm={12} xs={12} p={3} className="skills-title">
        <h1 className="other-heading">Computer Subjects</h1>
        {Subjects.map(({ name, src, value }, index) => (
          <div key={index} className="skills-box">
            <img src={src} alt={name} />
            <Tooltip title={value + `${" %"}`} placement="bottom" arrow>
              <div className="skills-bar">
                <h2 className="skills-name">{name}</h2>
                <LinearProgress
                  variant="determinate"
                  value={value}
                  color="info"
                />
              </div>
            </Tooltip>
          </div>
        ))}
      </Grid>
    </Grid>
  );
}

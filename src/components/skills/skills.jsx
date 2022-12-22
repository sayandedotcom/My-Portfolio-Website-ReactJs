import React, { useEffect } from "react";
import { Grid, LinearProgress, Tooltip } from "@mui/material";
import "./skills.css";
import Frontend from "./frontend";
import Languages from "./languages";
import Tools from "./tools-and-frameworks";
import Subjects from "./subjects";
import { FaLaptopCode } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function Skills() {
  useEffect(() => {
    document.title = "Sayan De | Skills";
  }, []);
  const darkMode = useSelector((state) => state.theme.value);
  return (
    <Grid
      container
      className={`skills ${darkMode ? "skills-dark" : "skills-light"}`}
    >
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <div className="skills-heading">
          <FaLaptopCode className="skill-icon" />
          &nbsp;Skills&nbsp;&
          <span style={{ color: `${darkMode ? "aqua" : "#ffe600"}` }}>
            &nbsp;Abilities
          </span>
        </div>
        <p className="skills-quote">
          It is possible to fly without motors, but not without knowledge and
          skill
        </p>
      </Grid>

      <Grid item lg={12} md={12} sm={12} xs={12} p={2}>
        <p className="other-skills-heading">
          Front-End Technologies & libraries I have worked with
        </p>
      </Grid>

      <Grid item lg={6} md={6} sm={12} xs={12} p={3} className="skills-title">
        {Frontend.map(
          ({ name, icon, svg, value }, index) =>
            index < Frontend.length / 2 && (
              <div key={index} className="skills-box">
                {darkMode ? icon : <img src={svg} alt={name} />}
                <Tooltip title={value + `${" %"}`} placement="bottom" arrow>
                  <div className="skills-bar">
                    <h2 className="skills-name">{name}</h2>
                    <LinearProgress
                      style={{
                        backgroundColor: `${darkMode ? "#0f0f0f" : "#00a6ff"}`,
                      }}
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
        {Frontend.map(
          ({ name, icon, svg, value }, index) =>
            index >= Frontend.length / 2 && (
              <div key={index} className="skills-box">
                {darkMode ? icon : <img src={svg} alt={name} />}
                <Tooltip title={value + `${" %"}`} placement="bottom" arrow>
                  <div className="skills-bar">
                    <h2 className="skills-name">{name}</h2>
                    <LinearProgress
                      style={{
                        backgroundColor: `${darkMode ? "#0f0f0f" : "#00a6ff"}`,
                      }}
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
        {Languages.map(({ name, icon, svg, value }, index) => (
          <div key={index} className="skills-box">
            {darkMode ? icon : <img src={svg} alt={name} />}
            <Tooltip title={value + `${" %"}`} placement="bottom" arrow>
              <div className="skills-bar">
                <h2 className="skills-name">{name}</h2>
                <LinearProgress
                  style={{
                    backgroundColor: `${darkMode ? "#0f0f0f" : "#00a6ff"}`,
                  }}
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
        {Tools.map(({ name, icon, svg, value }, index) => (
          <div key={index} className="skills-box">
            {darkMode ? icon : <img src={svg} alt={name} />}
            <Tooltip title={value + `${" %"}`} placement="bottom" arrow>
              <div className="skills-bar">
                <h2 className="skills-name">{name}</h2>
                <LinearProgress
                  style={{
                    backgroundColor: `${darkMode ? "#0f0f0f" : "#00a6ff"}`,
                  }}
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
        {Subjects.map(({ name, icon, svg, value }, index) => (
          <div key={index} className="skills-box">
            {darkMode ? icon : <img src={svg} alt={name} />}
            <Tooltip title={value + `${" %"}`} placement="bottom" arrow>
              <div className="skills-bar">
                <h2 className="skills-name">{name}</h2>
                <LinearProgress
                  style={{
                    backgroundColor: `${darkMode ? "#0f0f0f" : "#00a6ff"}`,
                  }}
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

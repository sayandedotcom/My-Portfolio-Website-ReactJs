import React, { useEffect } from "react";
import { Grid, LinearProgress, Tooltip } from "@mui/material";
import "./skills.css";
import FrontEnd from "./frontend";
import frontendDark from "./frontend-dark";
import languages from "./languages";
import languagesDark from "./languages-dark";
import Tools from "./tools-and-frameworks";
import toolsDark from "./tools-and-frameworks-dark";
import Subjects from "./subjects";
import subjectsDark from "./subjects-dark";
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
        {darkMode ? (
          <>
            {frontendDark.map(
              ({ name, src, value }, index) =>
                index <= 12 && (
                  <div key={index} className="skills-box">
                    {src}
                    <Tooltip title={value + `${" %"}`} placement="bottom" arrow>
                      <div className="skills-bar">
                        <h2 className="skills-name">{name}</h2>
                        <LinearProgress
                          style={{
                            backgroundColor: `${
                              darkMode ? "#0f0f0f" : "#5504a6"
                            }`,
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
          </>
        ) : (
          <>
            {FrontEnd.map(
              ({ name, src, value }, index) =>
                index <= 12 && (
                  <div key={index} className="skills-box">
                    <img src={src} alt={name} />
                    <Tooltip title={value + `${" %"}`} placement="bottom" arrow>
                      <div className="skills-bar">
                        <h2 className="skills-name">{name}</h2>
                        <LinearProgress
                          style={{
                            backgroundColor: `${
                              darkMode ? "#0f0f0f" : "#00a6ff"
                            }`,
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
          </>
        )}
      </Grid>

      <Grid item lg={6} md={6} sm={12} xs={12} p={3} className="skills-title">
        {darkMode ? (
          <>
            {frontendDark.map(
              ({ name, src, value }, index) =>
                index > 12 && (
                  <div key={index} className="skills-box">
                    {src}
                    <Tooltip title={value + `${" %"}`} placement="bottom" arrow>
                      <div className="skills-bar">
                        <h2 className="skills-name">{name}</h2>
                        <LinearProgress
                          style={{
                            backgroundColor: `${
                              darkMode ? "#0f0f0f" : "#00a6ff"
                            }`,
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
          </>
        ) : (
          <>
            {" "}
            {FrontEnd.map(
              ({ name, src, value }, index) =>
                index > 12 && (
                  <div key={index} className="skills-box">
                    <img src={src} alt={name} />
                    <Tooltip title={value + `${" %"}`} placement="bottom" arrow>
                      <div className="skills-bar">
                        <h2 className="skills-name">{name}</h2>
                        <LinearProgress
                          style={{
                            backgroundColor: `${
                              darkMode ? "#0f0f0f" : "#00a6ff"
                            }`,
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
          </>
        )}
      </Grid>

      <Grid item lg={12} md={12} sm={12} xs={12} p={2}>
        <p className="other-skills-heading">Others</p>
      </Grid>

      <Grid item lg={4} md={4} sm={12} xs={12} p={3} className="skills-title">
        <h1 className="other-heading">Languages</h1>
        {darkMode ? (
          <>
            {languagesDark.map(({ name, src, value }, index) => (
              <div key={index} className="skills-box">
                {src}
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
          </>
        ) : (
          <>
            {languages.map(({ name, src, value }, index) => (
              <div key={index} className="skills-box">
                <img src={src} alt={name} />
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
          </>
        )}
      </Grid>

      <Grid item lg={4} md={4} sm={12} xs={12} p={3} className="skills-title">
        <h1 className="other-heading">Tools & Frameworks</h1>
        {darkMode ? (
          <>
            {toolsDark.map(({ name, src, value }, index) => (
              <div key={index} className="skills-box">
                {src}
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
          </>
        ) : (
          <>
            {Tools.map(({ name, src, value }, index) => (
              <div key={index} className="skills-box">
                <img src={src} alt={name} />
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
          </>
        )}
      </Grid>

      <Grid item lg={4} md={4} sm={12} xs={12} p={3} className="skills-title">
        <h1 className="other-heading">Computer Subjects</h1>
        {darkMode ? (
          <>
            {subjectsDark.map(({ name, src, value }, index) => (
              <div key={index} className="skills-box">
                {src}
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
          </>
        ) : (
          <>
            {Subjects.map(({ name, src, value }, index) => (
              <div key={index} className="skills-box">
                <img src={src} alt={name} />
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
          </>
        )}
      </Grid>
    </Grid>
  );
}

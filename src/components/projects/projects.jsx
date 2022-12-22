import React, { useEffect } from "react";
import "./projects.css";
import ProjectsList from "./projectsList";
import { Grid } from "@mui/material";
import { FaLaptopCode, FaCode, FaEye } from "react-icons/fa";
import { useSelector } from "react-redux";
import { AiOutlineArrowRight } from "react-icons/ai";
export default function Projects() {
  useEffect(() => {
    document.title = "Sayan De | Projects";
  }, []);
  const darkMode = useSelector((state) => state.theme.value);
  return (
    <Grid
      container
      className={`projects ${darkMode ? "projects-dark" : "projects-light"}`}
    >
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <div className="projects-heading">
          <FaLaptopCode className="projects-icon" />
          &nbsp;My <span style={{ color: "#ffe600" }}>&nbsp;Projects</span>
        </div>
        <h5 className="projects-quote">
          A project is complete when it starts working for you, rather than you
          working for it.
        </h5>
      </Grid>

      {ProjectsList.map(({ img, title, live, code, bio }, index) => (
        <Grid
          key={index}
          item
          lg={6}
          md={6}
          sm={12}
          xs={12}
          className="container"
        >
          <div className="card">
            <img src={img} alt="pic" />
            <div className="intro">
              <h2 className="intro-title">{title}</h2>
              <p className="intro-desc">{bio}</p>
              <div className="projects-button">
                <a
                  href={live}
                  target="blank"
                  style={{ textDecoration: "none" }}
                >
                  <button className="projects-btn">
                    {" "}
                    <FaEye />
                    &nbsp; View
                  </button>
                </a>
                <a
                  href={code}
                  target="blank"
                  style={{ textDecoration: "none" }}
                >
                  <button className="projects-btn">
                    {" "}
                    <FaCode />
                    &nbsp; Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </Grid>
      ))}
      <a
        href="https://github.com/sayande2002"
        target="blank"
        className="projects-comming"
      >
        More Projects Comming Soon..
        <AiOutlineArrowRight />
      </a>
    </Grid>
  );
}

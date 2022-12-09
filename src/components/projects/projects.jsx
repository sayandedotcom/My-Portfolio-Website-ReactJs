import React from "react";
import "./projects.css";
import ProjectsList from "./projectsList";
import { Grid } from "@mui/material";
import { FaLaptopCode, FaCode, FaEye } from "react-icons/fa";
// import PortFolio from "../../assests/image-portfolio.png";
export default function Projects() {
  return (
    <Grid container className="projects" p={5}>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <div className="projects-heading">
          <FaLaptopCode className="projects-icon" />
          &nbsp;My <span style={{ color: "#ffe600" }}>&nbsp;Projects</span>
        </div>
        <h3 className="projects-quote">
          A project is complete when it starts working for you, rather than you
          working for it.
        </h3>
      </Grid>

      {ProjectsList.map(({ img, title, live, code, bio }, index) => (
        <Grid item lg={6} md={6} sm={12} xs={12} className="container">
          <div key={index} className="card">
            <img src={img} alt="pic" />
            <div className="intro">
              <h1 className="intro-title">{title}</h1>
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
    </Grid>
  );
}

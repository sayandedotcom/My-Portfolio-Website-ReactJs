import React from "react";
import "./projects.css";
import ProjectsList from "./projectsList";
import { Grid } from "@mui/material";
import { FaLaptopCode } from "react-icons/fa";

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

      {/* <div className="container">
        <div className="card">
          <img src={Calulator} alt="cal" />
          <div className="intro">
            <h1>Calculator</h1>
            <p>My name is Sayan De</p>
          </div>
        </div>
      </div> */}
    </Grid>
  );
}

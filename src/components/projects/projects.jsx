import { Grid } from "@mui/material";
import React from "react";
import "./projectss.css";
import { FaLaptopCode } from "react-icons/fa";
export default function Projects() {
  return (
    <Grid container className="projects-heading">
      <Grid item xs={12}>
        <h1>
          <FaLaptopCode /> My Projects
        </h1>
        <h3>
          A PROJECT IS COMPLETE WHEN IT STARTS WORKING FOR YOU, RATHER THAN YOU
          WORKING FOR IT.
        </h3>
      </Grid>
      <Grid item xs={12}></Grid>
    </Grid>
  );
}

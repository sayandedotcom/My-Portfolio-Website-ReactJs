import React from "react";
import { Grid } from "@mui/material";
import "./about.css";
import PersonIcon from "@mui/icons-material/Person";
export default function About() {
  return (
    <Grid container className="about" p={5}>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <div className="about-heading">
          <PersonIcon sx={{ fontSize: "2.5rem" }} className="about-icon" />
          &nbsp;About&nbsp;<span style={{ color: "#7303a7" }}>Me</span>
        </div>
        <h3 className="about-quote">
          It is possible to fly without motors, but not without knowledge and
          skill
        </h3>
      </Grid>
    </Grid>
  );
}

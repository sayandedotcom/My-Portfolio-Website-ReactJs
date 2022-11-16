import React from "react";
import { Grid } from "@mui/material";
import "./contactme.css";
import { FaPhoneAlt } from "react-icons/fa";
export default function Contactme() {
  return (
    <Grid container>
      <Grid item xs={12} className="contactme-heading ">
        <h1>
          <FaPhoneAlt /> Contact Me
        </h1>
        <h3>
          Every mind needs friendly contact with other minds, for food of
          expansion and growth.
        </h3>
      </Grid>
      <Grid item xs={12}></Grid>
    </Grid>
  );
}

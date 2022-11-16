import React from "react";
import "./errorpage.css";
import { useNavigate } from "react-router-dom";
import { Button, Grid } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HomeIcon from "@mui/icons-material/Home";
function Errorpage() {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };
  return (
    <Grid container>
      <Grid item xs={12} mt={"2rem"} className="error">
        <h1 className="error-Heading">404</h1>
      </Grid>
      <Grid item xs={12} className="error-text">
        <h1>Look Like you Are lost</h1>
        <h3>The Page You Are Looking For Not Avaible!</h3>
        <Button
          sx={{ m: 2 }}
          className="error-buttons"
          variant="contained"
          size="large"
          startIcon={<HomeIcon />}
          onClick={() => goHome()}
        >
          Go to home
        </Button>

        <Button
          sx={{ m: 2 }}
          className="error-buttons"
          variant="contained"
          size="large"
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate(-1)}
        >
          Go Back
        </Button>
      </Grid>
    </Grid>
  );
}

export default Errorpage;

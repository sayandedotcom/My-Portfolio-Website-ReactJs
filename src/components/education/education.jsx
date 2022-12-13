import React, { useState, useEffect } from "react";
import "./education.css";
import EducationWeb from "./education-web";
import EducationMobile from "./education-mobile";

// import { useTheme, useMediaQuery } from "@mui/material";
function Education() {
  useEffect(() => {
    document.title = "Sayan De | Educations";
  }, []);
  // const theme = useTheme();
  // const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  // {isMatch ? <EducationMobile/> : <EducationWeb/>}

  const [width, setWidth] = useState(window.innerWidth);

  const breakpoint = 900;
  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  // console.log(width);
  return width < breakpoint ? <EducationMobile /> : <EducationWeb />;
}

export default Education;

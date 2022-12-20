import React, { useState, useEffect } from "react";
import "./education.css";
import EducationWeb from "./education-web";
import EducationMobile from "./education-mobile";
import { useSelector } from "react-redux";
// import { useTheme, useMediaQuery } from "@mui/material";
function Education() {
  useEffect(() => {
    document.title = "Sayan De | Educations";
  }, []);
  const windowSize = useSelector((state) => state.window.breakpoint);
  // const theme = useTheme();
  // const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  // {isMatch ? <EducationMobile/> : <EducationWeb/>}

  const [width, setWidth] = useState(window.innerWidth);

  const breakpoint = 900;
  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return width < breakpoint ? <EducationMobile /> : <EducationWeb />;
  // return windowSize < 900 ? <EducationMobile /> : <EducationWeb />;
}

export default Education;

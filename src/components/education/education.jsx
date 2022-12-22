import React, { useEffect } from "react";
import "./education.css";
import EducationWeb from "./education-web";
import EducationMobile from "./education-mobile";
import { useSelector } from "react-redux";
function Education() {
  useEffect(() => {
    document.title = "Sayan De | Educations";
  }, []);
  const windowSize = useSelector((state) => state.window.breakpoint);
  return windowSize < 1100 ? <EducationMobile /> : <EducationWeb />;
}

export default Education;

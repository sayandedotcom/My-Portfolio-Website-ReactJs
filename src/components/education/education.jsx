import React from "react";
import "./education.css";
import EducationWeb from "./education-web";
import EducationMobile from "./education-mobile";
import { useState } from "react";

function Education() {
  const [width, setWidth] = useState(window.innerWidth);

  const breakpoint = 620;
  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  console.log(width);
  return width < breakpoint ? <EducationMobile /> : <EducationWeb />;
}

export default Education;

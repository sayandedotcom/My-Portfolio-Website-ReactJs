import React from "react";
import "./gotobutton.css";
import { Tooltip } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useEffect, useState } from "react";
function Gotobutton() {
  const [isVisible, setIsVisible] = useState(false);
  const listenToScroll = () => {
    let heightToHidden = 100;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);
  const goto = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <>
      {isVisible && (
        <Tooltip title="Scroll Top" placement="bottom" arrow>
          <button className="goto" onClick={goto}>
            <KeyboardArrowUpIcon className="arrow" />{" "}
          </button>
        </Tooltip>
      )}
    </>
  );
}

export default Gotobutton;

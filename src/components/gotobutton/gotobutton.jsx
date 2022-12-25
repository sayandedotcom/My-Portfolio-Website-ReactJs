import React from "react";
import { Tooltip } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import GoTopButton from "./gotobutton.styles";

function Gotobutton() {
  const darkMode = useSelector((state) => state.theme.value);
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
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      {isVisible && (
        <Tooltip title="Scroll Top" placement="bottom" arrow>
          <GoTopButton darkMode={darkMode} onClick={goto}>
            <KeyboardArrowUpIcon
              style={{
                stroke: `${darkMode ? "black" : "white"}`,
                strokeWidth: "2",
              }}
            />
          </GoTopButton>
        </Tooltip>
      )}
    </>
  );
}

export default Gotobutton;

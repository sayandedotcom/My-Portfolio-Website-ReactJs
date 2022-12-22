import React from "react";
import { Tooltip } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const GoTopButton = styled.button`
  background-color: ${({ darkMode }) => (darkMode ? "white" : "#421bea")};
  border: none;
  border-radius: 50%;
  cursor: pointer;
  padding: 6.5px 9px;
  box-shadow: ${({ darkMode }) =>
    darkMode
      ? "0px 5px 10px rgb(250, 250, 250)"
      : "0px 5px 10px rgb(48 68 247 / 60%)"};
  z-index: 1000;
  top: calc(100% - 6rem);
  position: fixed;
  right: 1rem;
  transition: 1s, linear;
`;

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

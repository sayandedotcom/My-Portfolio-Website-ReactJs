import React from "react";
import { Tooltip } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { dark } from "../../store/slice/themeSlice";
import "./navigation.css";
function Toggle() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.value);
  return (
    <Tooltip
      title={`Switch to ${darkMode ? "Light Mode" : "Dark Mode"}`}
      placement="bottom"
      arrow
    >
      <div
        className="toggle"
        onClick={() => {
          dispatch(dark());
        }}
      >
        <div className={darkMode ? "circledark" : "circlewhite"}></div>
      </div>
    </Tooltip>
  );
}

export default Toggle;

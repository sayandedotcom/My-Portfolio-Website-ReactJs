import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useSelector } from "react-redux";
import "./navigation.css";
import {
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { NavLink } from "react-router-dom";
function DrawerC({ navLinks }) {
  const darkMode = useSelector((state) => state.theme.value);
  const [open, setOpen] = useState(false);
  return (
    <>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <List>
          {navLinks.map(({ name, to, icon }, index) => (
            <ListItemButton onClick={() => setOpen(false)} key={index}>
              <ListItemIcon>
                <ListItemText>
                  <NavLink className="nav-link" to={to}>
                    {icon}&nbsp;
                    {name}
                  </NavLink>
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>

      <IconButton
        sx={{ color: `${!darkMode ? "black" : "white"}` }}
        onClick={() => setOpen(!open)}
      >
        <MenuRoundedIcon />
      </IconButton>
    </>
  );
}

export default DrawerC;
// marginLeft: "auto",

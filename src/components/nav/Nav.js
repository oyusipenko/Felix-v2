import React, { useContext } from "react";
import { AppContext } from "../../AppContext";
import NavMenu from "./NavMenu";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SettingsIcon from "@material-ui/icons/Settings";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  toolBar: {
    justifyContent: "space-between",
  },
}));

export default function Nav() {
  const { toggleNav } = useContext(AppContext);
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar className={classes.toolBar}>
            <div>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => toggleNav()}
              >
                <MenuIcon />
              </IconButton>
            </div>
            <NavMenu />
            <IconButton edge="end" color="inherit" aria-label="settings">
              <SettingsIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
}

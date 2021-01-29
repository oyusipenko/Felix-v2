import React, { useContext } from "react";
import { AppContext } from "../../AppContext";
import NavMenu from "./NavMenu";
import {
  AppBar,
  Toolbar,
  IconButton,
  useMediaQuery,
  useTheme,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SettingsIcon from "@material-ui/icons/Settings";
import MobileDrawer from "./MobileDrawer";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

import ContentDrawer from "./ContentDrawer";
import CssBaseline from "@material-ui/core/CssBaseline";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolBar: {
    justifyContent: "space-between",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));

export default function Nav() {
  // const { toggleNav } = useContext(AppContext);
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <div>
            {isMobile ? (
              <MobileDrawer />
            ) : (
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => toggleNav()}
              >
                <MenuIcon />
              </IconButton>
            )}
          </div>
          <NavMenu />
          <IconButton edge="end" color="inherit" aria-label="settings">
            <SettingsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {!isMobile && (
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Toolbar />
          <div className={classes.drawerContainer}>
            <ContentDrawer />
          </div>
        </Drawer>
      )}
    </>
  );
}

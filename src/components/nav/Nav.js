import React, { useContext } from "react";
import { AppContext } from "../../AppContext";
import NavMenu from "./NavMenu";
import MobileDrawer from "./MobileDrawer";
import ContentDrawer from "./ContentDrawer";
import {
  AppBar,
  Toolbar,
  IconButton,
  useMediaQuery,
  useTheme,
  Drawer,
  CssBaseline,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SettingsIcon from "@material-ui/icons/Settings";

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
  const { toggleNav, viewNav } = useContext(AppContext);
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
      {!isMobile && viewNav && (
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

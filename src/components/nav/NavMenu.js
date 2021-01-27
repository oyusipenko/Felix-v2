import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Tabs,
  Tab,
  Button,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolBar: {
    justifyContent: "space-between",
  },
}));

export default function NavMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentTab, setCurrentTab] = useState(0);
  const history = useHistory();
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const menuItems = [
    {
      id: 0,
      menuTitle: "Home",
      pageURL: "/",
    },
    {
      id: 1,
      menuTitle: "To-Do",
      pageURL: "todo/inbox",
    },
    {
      id: 2,
      menuTitle: "Targets",
      pageURL: "targets",
    },
    {
      id: 3,
      menuTitle: "Notes",
      pageURL: "notes",
    },
    {
      id: 4,
      menuTitle: "Calendar",
      pageURL: "calendar",
    },
  ];

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenu = (id, pageURL) => {
    history.replace("");
    history.push(pageURL);
    setCurrentTab(id);
    setAnchorEl(null);
  };

  return (
    <>
      {isMobile ? (
        <>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
            variant="contained"
            color="secondary"
          >
            Open Menu
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {menuItems.map((menuItem) => {
              const { id, menuTitle, pageURL } = menuItem;
              return (
                <MenuItem key={id} onClick={() => handleMenu(id, pageURL)}>
                  {menuTitle}
                </MenuItem>
              );
            })}
          </Menu>
        </>
      ) : (
        <Tabs className={classes.navBar} value={currentTab}>
          {menuItems.map((menuItem) => {
            const { id, menuTitle, pageURL } = menuItem;
            return (
              <Tab
                key={id}
                label={menuTitle}
                onClick={() => handleMenu(id, pageURL)}
              />
            );
          })}
        </Tabs>
      )}
    </>
  );
}

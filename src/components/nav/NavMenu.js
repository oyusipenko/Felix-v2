import React from "react";
import { useHistory } from "react-router-dom";
import { Tabs, Tab, Button, Menu, MenuItem, Hidden } from "@material-ui/core";
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
  const history = useHistory();
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenu = (value) => {
    history.replace("");
    history.push(tabNameToIndex[value]);
    setValue(value);
    setAnchorEl(null);
  };

  const [value, setValue] = React.useState(0);
  const tabNameToIndex = {
    0: "/",
    1: "todo/inbox",
    2: "targets",
    3: "notes",
    4: "calendar",
  };
  const handleChange = (event, newValue) => {
    history.replace("");
    history.push(tabNameToIndex[newValue]);
    setValue(newValue);
  };

  return (
    <>
      <Hidden mdUp>
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
          <MenuItem onClick={() => handleMenu(0)}>Home</MenuItem>
          <MenuItem onClick={() => handleMenu(1)}>To-Do</MenuItem>
          <MenuItem onClick={() => handleMenu(2)}>Targets</MenuItem>
          <MenuItem onClick={() => handleMenu(3)}>Notes</MenuItem>
          <MenuItem onClick={() => handleMenu(4)}>Targets</MenuItem>
        </Menu>
      </Hidden>
      <Hidden smDown>
        <Tabs className={classes.navBar} value={value} onChange={handleChange}>
          <Tab label="Home" />
          <Tab label="To-Do" />
          <Tab label="Targets" />
          <Tab label="Notes" />
          <Tab label="Calendar" />
        </Tabs>
      </Hidden>
    </>
  );
}

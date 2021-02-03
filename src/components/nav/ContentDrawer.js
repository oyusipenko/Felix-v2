import React from "react";
import { useHistory } from "react-router-dom";
import {
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import DeleteIcon from "@material-ui/icons/Delete";

const menuHomeItems = [
  {
    id: 0,
    menuTitle: "Home Item 1",
    pageURL: "/1",
    icon: <MailIcon />,
  },
  {
    id: 1,
    menuTitle: "Home Item 2",
    pageURL: "/2",
    icon: <MailIcon />,
  },
];
const menuTodoItems = [
  {
    id: 0,
    menuTitle: "Inbox Todos",
    pageURL: "/todo/inbox",
    icon: <InboxIcon />,
  },
  {
    id: 1,
    menuTitle: "Done Todos",
    pageURL: "/todo/done",
    icon: <DeleteIcon />,
  },
  //   id: 2,
  //   menuTitle: "Trash",
  //   pageURL: "/todo/trash",
  // },
];
const menuTargetsItems = [
  {
    id: 0,
    menuTitle: "Targets Item 1",
    pageURL: "/targets/1",
    icon: <MailIcon />,
  },
  {
    id: 1,
    menuTitle: "Targets Item 2",
    pageURL: "/targets/2",
    icon: <MailIcon />,
  },
];
const menuNotesItems = [
  {
    id: 0,
    menuTitle: "Notes Item 1",
    pageURL: "/notes/1",
    icon: <MailIcon />,
  },
  {
    id: 1,
    menuTitle: "Notes Item 1",
    pageURL: "/notes/2",
    icon: <MailIcon />,
  },
];
const menuCalendarItems = [
  {
    id: 0,
    menuTitle: "Calendar Item 1",
    pageURL: "/calendar/1",
    icon: <MailIcon />,
  },
  {
    id: 1,
    menuTitle: "Calendar Item 2",
    pageURL: "/calendar/2",
    icon: <MailIcon />,
  },
];

export default function ContentDrawer() {
  const history = useHistory();

  const handleMenu = (pageURL) => {
    history.replace("");
    history.push(pageURL);
  };

  const createButton = (obj) => {
    const { id, menuTitle, pageURL, icon } = obj;
    return (
      <ListItem
        key={id}
        button
        key={menuTitle}
        onClick={() => {
          handleMenu(pageURL);
        }}
      >
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={menuTitle} />
      </ListItem>
    );
  };

  let currentAppSection = [];

  switch (history.location.state) {
    case 0:
      currentAppSection = menuHomeItems;
      break;
    case 1:
      currentAppSection = menuTodoItems;
      break;
    case 2:
      currentAppSection = menuTargetsItems;
      break;
    case 3:
      currentAppSection = menuNotesItems;
      break;
    case 4:
      currentAppSection = menuCalendarItems;
      break;
    default:
      currentAppSection = menuHomeItems;
      break;
  }

  return (
    <>
      <List>{createButton(currentAppSection[0])}</List>
      <Divider />
      <List>{createButton(currentAppSection[1])}</List>
    </>
  );
}

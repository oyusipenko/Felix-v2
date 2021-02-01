import React from "react";
import { useHistory, useParams } from "react-router-dom";
import {
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

const menuHomeItems = [
  [
    {
      id: 0,
      menuTitle: "Home Item 1",
      pageURL: "/1",
    },
    {
      id: 1,
      menuTitle: "Home Item 2",
      pageURL: "/2",
    },
  ],
  [
    {
      id: 2,
      menuTitle: "Home Item 3",
      pageURL: "/3",
    },
  ],
];
const menuTodoItems = [
  [
    {
      id: 0,
      menuTitle: "Inbox Todos",
      pageURL: "/todo/inbox",
    },
    {
      id: 1,
      menuTitle: "Done Todos",
      pageURL: "/todo/done",
    },
  ],
  [
    {
      id: 2,
      menuTitle: "Trash",
      pageURL: "/todo/trash",
    },
  ],
];
const menuTargetsItems = [
  [
    {
      id: 0,
      menuTitle: "All Targets",
      pageURL: "/targets/all",
    },
    {
      id: 1,
      menuTitle: "Done Targets",
      pageURL: "/targets/done",
    },
  ],
  [
    {
      id: 2,
      menuTitle: "Trash",
      pageURL: "/targets/trash",
    },
  ],
];
const menuNotesItems = [
  [
    {
      id: 0,
      menuTitle: "All Notes",
      pageURL: "/notes/all",
    },
  ],
  [
    {
      id: 2,
      menuTitle: "Trash",
      pageURL: "/notes/trash",
    },
  ],
];
const menuCalendarItems = [
  [
    {
      id: 0,
      menuTitle: "Calendar Item 1",
      pageURL: "/calendar/1",
    },
    {
      id: 1,
      menuTitle: "Calendar Item 2",
      pageURL: "/calendar/2",
    },
  ],
  [
    {
      id: 2,
      menuTitle: "Trash",
      pageURL: "/calendar/trash",
    },
  ],
];

export default function ContentDrawer() {
  const history = useHistory();
  const { appSection } = useParams();

  const handleMenu = (pageURL) => {
    history.replace("");
    history.push(pageURL);
  };

  let currentAppSection = [];

  switch (appSection) {
    case "home":
      currentAppSection = menuHomeItems;
      break;
    case "todo":
      currentAppSection = menuTodoItems;
      break;
    case "targets":
      currentAppSection = menuTargetsItems;
      break;
    case "notes":
      currentAppSection = menuNotesItems;
      break;
    case "calendar":
      currentAppSection = menuCalendarItems;
      break;
    default:
      currentAppSection = menuHomeItems;
      break;
  }

  return (
    <>
      <List>
        {currentAppSection[0].map((obj) => {
          const { id, menuTitle, pageURL } = obj;
          return (
            <ListItem
              button
              key={menuTitle}
              onClick={() => {
                handleMenu(pageURL);
              }}
            >
              <ListItemIcon>
                {id % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={menuTitle} />
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <List>
        {currentAppSection[1].map((obj) => {
          const { id, menuTitle, pageURL } = obj;
          return (
            <ListItem
              button
              key={menuTitle}
              onClick={() => {
                handleMenu(pageURL);
              }}
            >
              <ListItemIcon>
                {id % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={menuTitle} />
            </ListItem>
          );
        })}
      </List>
    </>
  );
}

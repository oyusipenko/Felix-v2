import React from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import {
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

export default function ContentDrawer() {
  const history = useHistory();

  const todoDrawerItems = [["Inbox Todos", "Done Todos"], ["Trash"]];

  const menuTodoItems = [
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
  ];

  const handleMenu = (pageURL) => {
    history.replace("");
    history.push(pageURL);
  };

  return (
    <>
      <List>
        {menuTodoItems.map((obj) => {
          const { id, menuTitle, pageURL } = obj;
          // console.log(id, menuTitle, pageURL);
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
        {todoDrawerItems[1].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </>
  );
}

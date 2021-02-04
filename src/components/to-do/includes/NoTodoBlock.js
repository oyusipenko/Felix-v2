import React, { useContext } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { TodoContext } from "../TodoContext";

export default function NoTodoBlock(props) {
  const { isTodoCategoryEmpty, todoSection } = useContext(TodoContext);
  const useStyles = makeStyles((theme) => ({
    noTodo: {
      marginTop: "25px",
      textAlign: "center",
    },
  }));

  const classes = useStyles();

  return (
    !isTodoCategoryEmpty(todoSection) && (
      <Typography variant="h5" className={classes.noTodo}>
        {props.children}
      </Typography>
    )
  );
}

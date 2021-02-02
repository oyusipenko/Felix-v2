import React from "react";
import { useContext } from "react";
import { TodoContext } from "../TodoContext";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

export default function NoTodoBlock(props) {
  const { isTodoCategoryEmpty, todoSection } = useContext(TodoContext);
  const useStyles = makeStyles((theme) => ({
    noTodo: {
      marginTop: "40px",
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

import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import NoTodoBlock from "../includes/NoTodoBlock";
import TodoList from "../includes/TodoList";

import { Formik, Form, Field } from "formik";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "formik-material-ui";
import AddIcon from "@material-ui/icons/Add";

export default function TodoInbox() {
  const { addTodo } = useContext(TodoContext);

  const useStyles = makeStyles((theme) => ({
    form: {
      display: "flex",
      alignItems: "flex-end",
      width: "100%",
      "& .MuiInputBase-input": {
        paddingLeft: "15px",
      },
    },
    field: {
      width: "100%",
      marginRight: "50px",
    },
    button: {
      height: "32px",
    },
    todoList: {
      width: "100%",
    },
  }));

  const classes = useStyles();

  return (
    <>
      <Typography variant="h4">Inbox todos</Typography>
      <Formik
        initialValues={{
          todoName: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          addTodo(values);
          setSubmitting(false);
        }}
      >
        {({ submitForm, isSubmitting }) => (
          <Form className={classes.form}>
            <Field
              className={classes.field}
              component={TextField}
              type="todoName"
              label="What todo?"
              name="todoName"
            />
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              onClick={submitForm}
              startIcon={<AddIcon />}
            >
              Add
            </Button>
          </Form>
        )}
      </Formik>
      <NoTodoBlock>There is no active todos...</NoTodoBlock>
      <TodoList />
    </>
  );
}

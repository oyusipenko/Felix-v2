import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import NoTodoBlock from "../includes/NoTodoBlock";
import TodoList from "../includes/TodoList";

import { Formik, Form, Field } from "formik";
import { Button, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "formik-material-ui";

export default function TodoInbox() {
  const { addTodo, inputRef } = useContext(TodoContext);

  const useStyles = makeStyles((theme) => ({
    form: {
      display: "flex",
      alignItems: "center",
      width: "100%",
    },
    field: {
      width: "100%",
      marginRight: "50px",
    },
    button: {
      height: "40px",
    },
  }));

  const classes = useStyles();

  return (
    <>
      <h2 className="todo__description">Inbox todos</h2>
      <div className="todo__add-task">
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
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </div>
      <NoTodoBlock>There is no active todos...</NoTodoBlock>
      <TodoList />
    </>
  );
}

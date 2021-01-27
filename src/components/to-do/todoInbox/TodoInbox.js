import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import NoTodoBlock from "../includes/NoTodoBlock";
import TodoList from "../includes/TodoList";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import { FormControl } from "@material-ui/core";

export default function TodoInbox() {
  const { addTodo, inputRef } = useContext(TodoContext);
  return (
    <>
      <h2 className="todo__description">Inbox todos</h2>
      {/* <form onSubmit={addTodo}> */}
      <FormControl className="todo__add-task" onSubmit={addTodo}>
        <Input
          ref={inputRef}
          type="text"
          name="newTodo"
          placeholder="Enter your task..."
        />
        {/* <button>Add Task</button> */}
        <Button
          variant="contained"
          color="primary"
          style={{ width: 120, height: 25 }}
        >
          Add Task
        </Button>
      </FormControl>
      {/* </form> */}
      <NoTodoBlock>There is no active todos...</NoTodoBlock>
      <TodoList />
    </>
  );
}

import React from "react";
import TodoDone from "./TodoDone";
import TodoInbox from "./TodoInbox";

export default function TodoContainer({
  view,
  addTodo,
  todos,
  completeTodo,
  checkTodosLength,
  inputRef,
}) {
  switch (view) {
    case "inbox":
      return (
        <TodoInbox
          view={view}
          addTodo={addTodo}
          todos={todos}
          completeTodo={completeTodo}
          checkTodosLength={checkTodosLength}
          inputRef={inputRef}
        />
      );
    case "done":
      return (
        <TodoDone
          view={view}
          todos={todos}
          checkTodosLength={checkTodosLength}
        />
      );
  }
}

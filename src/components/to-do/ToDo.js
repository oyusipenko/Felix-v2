import React, { useState } from "react";
import SideBarTodo from "./SideBarTodo";
import TodoContainer from "./TodoContainer";

function ToDo({ viewNav }) {
  const [todos, setTodos] = useState([]);
  const [view, setView] = useState("inbox");

  const addTodo = (event) => {
    event.preventDefault();
    if (event.target.newTodo.value === "") {
      return null;
    }
    const newTodo = {
      index: todos.length,
      value: event.target.newTodo.value,
      status: "inbox",
      date: new Date(),
    };
    event.target.newTodo.value = "";
    setTodos([...todos, newTodo]);
  };

  const completeTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.index === id) {
        return { ...todo, status: "done" };
      }
      return todo;
    });
    setTodos([...updatedTodos]);
  };

  const checkTodosLength = (status) => {
    return todos.find((todo) => {
      if (todo.status === status) {
        return true;
      }
    });
  };

  const changeView = (view) => {
    setView(view);
  };

  return (
    <>
      <SideBarTodo changeView={changeView} view={view} viewNav={viewNav} />
      <div className="todo">
        <div className="wrapper">
          <h1 className="todo__title">Todo List</h1>
          <TodoContainer
            view={view}
            todos={todos}
            addTodo={addTodo}
            completeTodo={completeTodo}
            checkTodosLength={checkTodosLength}
          />
        </div>
      </div>
    </>
  );
}

export default ToDo;

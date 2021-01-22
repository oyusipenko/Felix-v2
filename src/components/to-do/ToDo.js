import React, { useState, useRef } from "react";
import { AppContext } from "../../AppContext";
import SideBar from "../sideBar/SideBar";
import TodoContainer from "./TodoContainer";

function ToDo() {
  const [todos, setTodos] = useState([]);
  const [view, setView] = useState("inbox");
  const inputRef = useRef(null);

  const addTodo = (event) => {
    event.preventDefault();
    console.log(event);
    if (event.target.newTodo.value === "") {
      inputRef.current.focus();
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
    inputRef.current.focus();
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
      <SideBar>
        <ul>
          <li onClick={() => changeView("inbox")}>Inbox Tasks</li>
          <li onClick={() => changeView("done")}>Done Tasks</li>
        </ul>
      </SideBar>
      <div className="todo">
        <div className="wrapper">
          <h1 className="todo__title">Todo List</h1>
          <TodoContainer
            view={view}
            todos={todos}
            addTodo={addTodo}
            completeTodo={completeTodo}
            checkTodosLength={checkTodosLength}
            inputRef={inputRef}
          />
        </div>
      </div>
    </>
  );
}

export default ToDo;

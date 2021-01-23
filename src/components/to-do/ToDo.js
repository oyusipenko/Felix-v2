import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import MainContainer from "../includes/mainContainer/MainContainer";
import SideBar from "../includes/sideBar/SideBar";
import TodoDone from "./todoDone/TodoDone";
import TodoInbox from "./todoInbox/TodoInbox";

function ToDo() {
  const [todos, setTodos] = useState([]);
  const { todoSection } = useParams();
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

  return (
    <>
      <SideBar>
        <ul>
          <li>
            <Link to="/todo/inbox">Inbox Tasks</Link>
          </li>
          <li>
            <Link to="/todo/done">Done Tasks</Link>
          </li>
        </ul>
      </SideBar>
      <MainContainer>
        <h1 className="todo__title">TO-DO</h1>
        {(() => {
          switch (todoSection) {
            case "inbox":
              return (
                <TodoInbox
                  view={todoSection}
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
                  view={todoSection}
                  todos={todos}
                  checkTodosLength={checkTodosLength}
                />
              );
          }
        })()}
      </MainContainer>
    </>
  );
}

export default ToDo;

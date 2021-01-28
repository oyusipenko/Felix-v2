import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";

const TodoContext = React.createContext();

function TodoContextProvider(props) {
  const [todos, setTodos] = useState([]);
  const { todoSection } = useParams();
  const inputRef = useRef(null);

  const state = getDefaultState();

  function getDefaultState() {
    return {
      todos: todos,
      addTodo: addTodo,
      completeTodo: completeTodo,
      isTodoCategoryEmpty: isTodoCategoryEmpty,
      inputRef: inputRef,
      todoSection: todoSection,
    };
  }

  // function addTodo(event) {
  //   console.log(event);
  //   event.preventDefault();

  //   if (event.target.newTodo.value === "") {
  //     inputRef.current.focus();
  //     return null;
  //   }
  //   const newTodo = {
  //     index: state.todos.length,
  //     value: event.target.newTodo.value,
  //     status: "inbox",
  //     date: new Date(),
  //   };
  //   event.target.newTodo.value = "";
  //   setTodos((todos) => [...todos, newTodo]);
  //   inputRef.current.focus();
  // }

  function addTodo({ todoName }) {
    const newTodo = {
      index: state.todos.length,
      value: todoName,
      status: "inbox",
      date: new Date(),
    };
    setTodos((todos) => [...todos, newTodo]);
  }

  function completeTodo(id) {
    const updatedTodos = todos.map((todo) => {
      if (todo.index === id) {
        return { ...todo, status: "done" };
      }
      return todo;
    });
    setTodos([...updatedTodos]);
  }

  function isTodoCategoryEmpty(todoCategory) {
    return todos.find((todo) => {
      if (todo.status === todoCategory) {
        return true;
      }
    });
  }
  return (
    <TodoContext.Provider value={state}>{props.children}</TodoContext.Provider>
  );
}

export { TodoContextProvider, TodoContext };

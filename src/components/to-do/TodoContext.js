import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";

const TodoContext = React.createContext();

function TodoContextProvider(props) {
  const [todos, setTodos] = useState([]);
  const { todoSection } = useParams();
  // const inputRef = useRef(null);

  const state = getDefaultState();

  function getDefaultState() {
    return {
      todos,
      addTodo,
      completeTodo,
      deleteTodo,
      isTodoCategoryEmpty,
      todoSection,
      getTodos,
      postTodos,
      // inputRef: inputRef,
    };
  }

  function getTodos() {
    const storageTodos = JSON.parse(localStorage.getItem("todos"));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }

  function postTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function addTodo(values) {
    const newTodo = {
      index: state.todos.length,
      value: values.todoName,
      status: "inbox",
      date: new Date(),
    };
    // inputRef.current.focus();
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

  function deleteTodo(id) {
    const updatedTodos = todos.map((todo) => {
      if (todo.index === id) {
        return { ...todo, status: "deleted" };
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

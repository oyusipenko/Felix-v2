import React, { Component } from "react";
const TodoContext = React.createContext();

class TodoContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = this.getDefaultState();
  }

  getDefaultState = () => {
    return {
      todos: [],
      addTodo: this.addTodo,
      completeTodo: this.completeTodo,
      isTodoCategoryEmpty: this.isTodoCategoryEmpty,
    };
  };

  addTodo = (event) => {
    event.preventDefault();
    console.log(event);
    if (event.target.newTodo.value === "") {
      // this.inputRef.current.focus();
      return null;
    }
    const newTodo = {
      index: this.state.todos.length,
      value: event.target.newTodo.value,
      status: "inbox",
      date: new Date(),
    };
    event.target.newTodo.value = "";
    this.setState(({ todos }) => ({
      todos: [...todos, newTodo],
    }));
    // this.inputRef.current.focus();
  };

  completeTodo = (id) => {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.index === id) {
        return { ...todo, status: "done" };
      }
      return todo;
    });
    this.setState({ todos: [...updatedTodos] });
  };

  isTodoCategoryEmpty = (todoCategory) => {
    return this.state.todos.find((todo) => {
      if (todo.status === todoCategory) {
        console.log(todoCategory);
        return true;
      }
    });
  };

  render() {
    return (
      <TodoContext.Provider value={this.state}>
        {this.props.children}
      </TodoContext.Provider>
    );
  }
}

export { TodoContextProvider, TodoContext };

import React from "react";

export default function NewTodo({ addTodo, inputRef }) {
  return (
    <div className="todo__add-task">
      <form onSubmit={addTodo}>
        <input
          ref={inputRef}
          type="text"
          name="newTodo"
          placeholder="Enter your task..."
        />
        <button>Add Task</button>
      </form>
    </div>
  );
}

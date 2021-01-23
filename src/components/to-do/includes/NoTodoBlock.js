import React from "react";

const NoTodoText = ({ view }) => {
  switch (view) {
    case "inbox":
      return "Please add new todos";
    case "done":
      return "Please complete some todos";
  }
};

export default function NoTodoBlock({ view }) {
  return (
    <h3 className="todo__no-todo">
      <NoTodoText view={view} />
    </h3>
  );
}

import React from "react";

export default function NoTodoBlock({ view }) {
  return (
    <h3 className="todo__no-todo">
      {(() => {
        switch (view) {
          case "inbox":
            return "Please add new todos";
          case "done":
            return "Please complete some todos";
        }
      })()}
    </h3>
  );
}

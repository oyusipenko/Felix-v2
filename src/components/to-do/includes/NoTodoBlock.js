import { useContext } from "react";
import { TodoContext } from "../TodoContext";

export default function NoTodoBlock(props) {
  const { isTodoCategoryEmpty, todoSection } = useContext(TodoContext);
  return !isTodoCategoryEmpty(todoSection) && props.children;
}

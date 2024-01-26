import React from "react";
import { useSelector } from "react-redux";

const TotalCompleteItems = () => {
  // Use useSelector to select the todos from the Redux store
  const todos = useSelector((state) => state.todos);

  // Use filter to get only completed todos
  const completedTodos = todos.filter((todo) => todo.completed === true);

  return (
    <h4 className="mt-3">Total Complete Items: {completedTodos.length}</h4>
  );
};

export default TotalCompleteItems;

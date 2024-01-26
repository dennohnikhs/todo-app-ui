import React from "react";
import { useDispatch } from "react-redux";
// import { toggleComplete, deleteTodo } from "../redux/todoSlice";
import { toggleCompleteAsync, deleteTodoAsync } from "../redux/todoSlice";
const TodoItem = ({ id, title, completed }) => {
  const handleCompleteClick = () => {
    dispatch(
      toggleCompleteAsync({
        id: id,
        completed: !completed,
      })
    );
  };
  const handleDeleteTodo = () => {
    dispatch(deleteTodoAsync({ id: id }));
  };
  const dispatch = useDispatch();
  return (
    <li className={`list-group-item ${completed && "list-group-item-success"}`}>
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center">
          <input
            type="checkbox"
            className="mr-3"
            checked={completed}
            onChange={handleCompleteClick}
          />
          <div>{title}</div>
          <div>{id}</div>
        </span>
        <button className="btn btn-danger" onClick={handleDeleteTodo}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;

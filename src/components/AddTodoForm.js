import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoAsync } from "../redux/todoSlice";
// import { addTodo } from "../redux/todoSlice";
const AddTodoForm = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(
      // addTodo({
      addTodoAsync({
        completed: false,
        id: Date.now(),
        title: value,
      })
    );
    console.log("user entered: " + value);
  };

  return (
    <form onSubmit={onSubmit} className="form-inline mt-3 mb-3 ">
      <label className="text-secondary px-3">Add New Todo</label>
      <div>
        <input
          type="text"
          className="form-control mb-2 mr-sm-2"
          placeholder="todo name..."
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />

        <button type="submit" className="btn btn-primary mb-2">
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddTodoForm;

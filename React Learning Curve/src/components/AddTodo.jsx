import { useState, useRef } from "react";
import { BiMessageAdd } from "react-icons/bi";
import styles from "../css-modules/AddTodo.module.css";

function AddTodo({ onNewChange }) {
  // const [todoName, setTodoName] = useState("");
  // const [dueDate, setDueDate] = useState("");
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  //   noOfUpdates.current += 1;
  // };

  // const handleDateChange = (event) => {
  //   setDueDate(event.target.value);
  //   console.log(`No of updates are: ${noOfUpdates.current}`);
  // };

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";

    onNewChange(todoName, dueDate);

    // setTodoName("");
    // setDueDate("");
  };

  return (
    <div className="container">
      <form className="row btn-layout" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            className={styles["value-input"]}
            type="text"
            ref={todoNameElement}
            placeholder="Input Todo here"
            // value={todoName}
            // onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            className={styles["value-input"]}
            type="date"
            ref={dueDateElement}
            // value={dueDate}
            // onChange={handleDateChange}
          />
        </div>

        <div className="col-2">
          <button className="btn btn-success todo-btn">
            <BiMessageAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;

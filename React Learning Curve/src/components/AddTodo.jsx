import { useState } from "react";
import { BiMessageAdd } from "react-icons/bi";
import styles from "../css-modules/AddTodo.module.css";

function AddTodo({ onNewChange }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewChange(todoName, dueDate);

    setTodoName("");
    setDueDate("");
  };

  return (
    <div className="container">
      <div className="row btn-layout">
        <div className="col-6">
          <input
            className={styles["value-input"]}
            type="text"
            placeholder="Input Todo here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            className={styles["value-input"]}
            type="date"
            value={dueDate}
            onChange={handleDateChange}
          />
        </div>

        <div className="col-2">
          <button
            type="button"
            className="btn btn-success todo-btn"
            onClick={handleAddButtonClicked}
          >
            <BiMessageAdd />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;

import styles from "../css-modules/AddTodo.module.css";

function AddTodo() {
  return (
    <div className="container">
      <div className="row btn-layout">
        <div className="col-6">
          <input
            className={styles["value-input"]}
            type="text"
            placeholder="Input Todo here"
          />
        </div>
        <div className="col-4">
          <input className={styles["value-input"]} type="date" />
        </div>

        <div className="col-2">
          <button type="button" className="btn btn-success todo-btn">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;

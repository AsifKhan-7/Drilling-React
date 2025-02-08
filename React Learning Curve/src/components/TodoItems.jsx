import TodoItem from "./TodoItem";
import styles from "../css-modules/TodoItems.module.css";

const TodoItems = ({ todoItems }) => {
  return (
    <div className={styles["items-container"]}>
      {todoItems.map((todoItem) => (
        <TodoItem
          key={todoItem.id}
          todoName={todoItem.name}
          todoDate={todoItem.dueDate}
        />
      ))}
    </div>
  );
};

export default TodoItems;

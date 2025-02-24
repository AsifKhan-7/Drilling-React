import TodoItem from "./TodoItem";
import styles from "../css-modules/TodoItems.module.css";

const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className={styles["items-container"]}>
      {todoItems.map((todoItem) => (
        <TodoItem
          key={todoItem.name}
          todoName={todoItem.name}
          todoDate={todoItem.dueDate}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
};

export default TodoItems;

import "./App.css";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";

function App() {
  const todoItems = [
    {
      id: 0,
      name: "Buy Milk",
      dueDate: "08/02/2025",
    },

    {
      id: 1,
      name: "Go to College",
      dueDate: "08/02/2025",
    },
    {
      id: 2,
      name: "Learning React",
      dueDate: "08/02/2025",
    },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems} />
    </center>
  );
}

export default App;

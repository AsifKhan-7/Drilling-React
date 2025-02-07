import FoodItems from "./components/FoodItems";
import ErrorMsg from "./components/ErrorMsg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  let healthyFoodItems = ["Oats", "Salad", "Green Vegetables", "Milk"];

  return (
    <>
      <h1 className="fw-bolder heading">Healthy Foods List</h1>

      <FoodItems items={healthyFoodItems} />
      <ErrorMsg items={healthyFoodItems} />
    </>
  );
}

export default App;

import Container from "./components/Container";
import FoodItems from "./components/FoodItems";
import ErrorMsg from "./components/ErrorMsg";
import FoodInput from "./components/FoodInput";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";

function App() {
  let [healthyFoodItems, sethealthyFoodItems] = useState([
    "Oats",
    "Salad",
    "Green Vegetables",
  ]);

  const OnKeydown = (event) => {
    if (event.key === "Enter") {
      let newFooditem = event.target.value;
      event.target.value = "";
      let newFoodItems = [...healthyFoodItems, newFooditem];
      sethealthyFoodItems(newFoodItems);
      console.log(`User entered food item is : ${newFoodItems}`);
    }

    // console.log(event.target.value);
    // setTextState(event.target.value);
  };

  return (
    <>
      <Container>
        <h1 className="fw-bolder heading text-center">Healthy Foods List</h1>
        <ErrorMsg items={healthyFoodItems} />
        <FoodInput handleOnKeydown={OnKeydown} />
        <FoodItems items={healthyFoodItems} />
      </Container>
    </>
  );
}

export default App;

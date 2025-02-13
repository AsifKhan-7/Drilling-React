import Container from "./components/Container";
import FoodItems from "./components/FoodItems";
import ErrorMsg from "./components/ErrorMsg";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodInput from "./components/FoodInput";
import "./App.css";
import { useState } from "react";

function App() {
  let healthyFoodItems = ["Oats", "Salad", "Green Vegetables", "Milk"];
  let [textToShow, settextToShow] = useState("");

  const handleOnChange = (event) => {
    settextToShow(event.target.value);
    console.log(event.target.value);
  };

  return (
    <>
      <Container>
        <h1 className="fw-bolder heading text-center">Healthy Foods List</h1>
        <ErrorMsg items={healthyFoodItems} />
        <FoodInput handleOnChange={handleOnChange} />
        <p>{textToShow}</p>
        <FoodItems items={healthyFoodItems} />
      </Container>
    </>
  );
}

export default App;

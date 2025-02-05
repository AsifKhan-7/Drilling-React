// import React from "react";
import FoodItems from "./components/FoodItems";
import ErrorMsg from "./components/ErrorMsg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  let healthyFoodItems = ["Oats", "Salad", "Green Vegetables"];

  return (
    // <React.Fragment>
    <>
      <h1 className="text-center my-5 fw-bolder">Healthy Foods List</h1>

      <ErrorMsg />
      <FoodItems />
    </>
    // </React.Fragment>
  );
}

export default App;

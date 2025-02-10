import Container from "./components/Container";
import FoodItems from "./components/FoodItems";
import ErrorMsg from "./components/ErrorMsg";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodInput from "./components/FoodInput";
import "./App.css";

function App() {
  let healthyFoodItems = ["Oats", "Salad", "Green Vegetables", "Milk"];

  return (
    <>
      <Container>
        <h1 className="fw-bolder heading text-center">Healthy Foods List</h1>
        <ErrorMsg items={healthyFoodItems} />
        <FoodInput />
        <FoodItems items={healthyFoodItems} />
      </Container>

      {/* <Container>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          ea. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Asperiores, ea. ea. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Asperiores, ea.
        </p>
      </Container> */}
    </>
  );
}

export default App;

import ClockHeading from "./components/ClockHeading";
import ClockMoto from "./components/ClockMoto";
import CurrentTime from "./components/CurrentTime";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <center>
      <ClockHeading />
      <ClockMoto />
      <CurrentTime />
    </center>
  );
}

export default App;

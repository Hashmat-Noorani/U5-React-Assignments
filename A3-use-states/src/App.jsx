import { useState } from "react";
import "./App.css";
import { Inventory } from "./components/inventory";

function App() {
  const [counter, setCounter] = useState(0);
  function updateCount(val) {
    setCounter(counter + val);
  }
  function double() {
    setCounter(counter * 2);
  }
  return (
    <div className="App">
      <h1 style={counter % 2 == 0 ? { color: "green" } : { color: "red" }}>
        counter: {counter}
      </h1>
      <button onClick={() => updateCount(1)}>Increment</button>
      <button onClick={() => updateCount(-1)}>Decrement</button>
      <button onClick={double}>Double</button>
      <hr />
      <Inventory />
    </div>
  );
}

export default App;

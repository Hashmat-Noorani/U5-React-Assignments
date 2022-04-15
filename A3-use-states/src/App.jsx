import "./App.css";
import { Inventory } from "./components/inventory";
import { Counter } from "./components/counter";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <Counter counter={counter} setCounter={setCounter} />
      <Inventory />
    </div>
  );
}

export default App;

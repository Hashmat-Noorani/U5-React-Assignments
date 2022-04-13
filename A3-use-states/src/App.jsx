import "./App.css";
import { Inventory } from "./components/inventory";
import { Counter } from "./components/counter";

function App() {
  return (
    <div className="App">
      <Counter />
      <Inventory />
    </div>
  );
}

export default App;

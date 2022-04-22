import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [startCounter, setStartCounter] = useState(0);
  const [endCounter, setEndCounter] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      if (endCounter) {
        setCounter((preCount) => {
          if (preCount < endCounter) {
            return preCount + 1;
          } else {
            clearInterval(interval);
            return preCount;
          }
        });
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [startCounter, endCounter]);

  return (
    <div className="App">
      <h1>counter:{counter}</h1>
      start:
      <input
        onInput={(e) => {
          setStartCounter(+e.target.value);
          setCounter(+e.target.value);
        }}
        type="number"
      />
      end:
      <input
        onInput={(e) => {
          setEndCounter(+e.target.value);
          setCounter(startCounter);
        }}
        type="number"
      />
    </div>
  );
}

export default App;

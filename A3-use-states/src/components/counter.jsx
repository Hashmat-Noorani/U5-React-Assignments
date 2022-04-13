import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  function updateCount(val) {
    setCounter(counter + val);
  }
  function double() {
    setCounter(counter * 2);
  }
  return (
    <>
      <h1 style={counter % 2 == 0 ? { color: "green" } : { color: "red" }}>
        counter: {counter}
      </h1>
      <button onClick={() => updateCount(1)}>Increment</button>
      <button onClick={() => updateCount(-1)}>Decrement</button>
      <button onClick={double}>Double</button>
      <hr />
    </>
  );
};

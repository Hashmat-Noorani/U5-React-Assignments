export const Counter = ({ counter, setCounter }) => {
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

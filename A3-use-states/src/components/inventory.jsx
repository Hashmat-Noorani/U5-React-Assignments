import { useState } from "react";
import "./inventory.css";
export const Inventory = () => {
  const [books, setBooks] = useState(10);
  const [notebooks, setNotebooks] = useState(13);
  const [pens, setPens] = useState(40);
  let total = books + notebooks + pens;

  function update(item, val) {
    if (total >= 0) {
      switch (item) {
        case "books":
          setBooks(books + val);
          break;
        case "notebooks":
          setNotebooks(notebooks + val);
          break;
        case "pens":
          setPens(pens + val);
      }
    }
  }
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        width: "400px",
        margin: "auto",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button onClick={() => update("books", 1)} className="circlularButton">
          +
        </button>
        <button onClick={() => update("books", -1)} className="circlularButton">
          -
        </button>
        <span>{books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button
          onClick={() => update("notebooks", 1)}
          className="circlularButton"
        >
          +
        </button>
        <button
          onClick={() => update("notebooks", -1)}
          className="circlularButton"
        >
          -
        </button>
        <span>{notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button onClick={() => update("pens", 1)} className="circlularButton">
          +
        </button>
        <button onClick={() => update("pens", -1)} className="circlularButton">
          -
        </button>
        <span>{pens}</span>
      </div>
      {/*calculate total and show it*/}
      total: {total}
    </div>
  );
};

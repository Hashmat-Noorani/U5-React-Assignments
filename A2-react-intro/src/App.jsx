import "./App.css";

function App() {
  const phones = ["Android", "Blackberry", "Windows", "Iphone"];
  const comp = ["Samsung", "Htc", "Micromax", "Apple"];
  const nav = ["services", "Projects", "About"];
  function Heading(props) {
    return <h1>{props.name}</h1>;
  }
  function List({ name, style }) {
    return <li className={style}>{name}</li>;
  }
  return (
    <>
      <nav>
        <div>
          <h1>LOGOBAKERY</h1>
        </div>
        <div>
          {nav.map((e) => {
            return <span>{e}</span>;
          })}
        </div>
        <div>
          <button>contact</button>
        </div>
      </nav>
      <div id="container">
        <Heading name="Mobile Operating System" />
        <div>
          {phones.map((e, index) => {
            return (
              <List name={e} style={index % 2 == 0 ? "square" : "circle"} />
            );
          })}
        </div>
        <Heading name="Mobile Manufacturer" />
        <div>
          {comp.map((e, index) => {
            return <List name={e} style={index % 2 == 0 ? "disc" : "square"} />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;

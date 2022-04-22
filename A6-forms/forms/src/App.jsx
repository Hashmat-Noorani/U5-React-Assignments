import "./App.css";
import { UserDetails } from "./components/UserDetails";
import axios from "axios";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios
      .get("http://localhost:8080/users")
      .then((d) => setData(d.data))
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="App">
      <UserDetails getData={getData} />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Marital Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e) => (
            <tr key={nanoid()}>
              <td>{e.name}</td>
              <td>{e.age}</td>
              <td>{e.address}</td>
              <td>{e.department}</td>
              <td>{e.salary}</td>
              <td>{e.marital_status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

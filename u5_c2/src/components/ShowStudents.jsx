import { useState, useEffect } from "react";
import "./ShowStudents.css";
export const ShowStudents = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let data = await fetch("http://localhost:8080/students").then((d) =>
      d.json()
    );
    // console.log(data);
    setStudents(data);
  };

  return (
    <div>
      <div className="controls">
        <div>
          Sort By:{" "}
          <select
            // select dropdown needs both value and onChange
            className="sortby"
          >
            <option value="first_name">First Name</option>
            <option value="gender">Gender</option>
            <option value="age">Age</option>
            <option value="tenth_score">10th Score</option>
            <option value="twelth_score">12th Score</option>
          </select>
        </div>
        <div>
          Order:
          <select
            // select dropdown needs both value and onChange
            className="sortorder"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <button className="sort">sort</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Age</th>
            <th>10th Score</th>
            <th>12th Score</th>
            <th>Branch</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {students.map((s) => (
            <tr className="row">
              <td className="first_name">{s.first_name}</td>
              <td className="last_name">{s.last_name}</td>
              <td className="email">{s.email}</td>
              <td className="gender">{s.gender}</td>
              <td className="age">{s.age}</td>
              <td className="tenth_score">{s.tenth_score}</td>
              <td className="twelth_score">{s.twelth_score}</td>
              <td className="preferred_branch">{s.preferred_branch}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

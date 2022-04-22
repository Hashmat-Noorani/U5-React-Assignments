import { useState } from "react";
import "./UserDetails.css";
import axios from "axios";

export const UserDetails = ({ getData }) => {
  const [formData, setFormData] = useState({});

  const handleInput = (e) => {
    console.log(e.target.name);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitDetails = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/users", formData).then((d) => getData());

    // fetch("http://localhost:8080/users", {
    //   method: "POST",
    //   body: JSON.stringify(formData),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((d) => d.json())
    //   .then((data) => console.log(data));
  };
  return (
    <form onSubmit={submitDetails}>
      Name: <input onChange={handleInput} type="text" name="name" />
      Age: <input onChange={handleInput} type="number" name="age" />
      Address: <input onChange={handleInput} type="text" name="address" />
      <select onChange={handleInput} name="department">
        <option value="">Select Department</option>
        <option value="arts">Arts</option>
        <option value="science">Science</option>
        <option value="commerce">Commerce</option>
        <option value="acting">Acting</option>
      </select>
      <input
        onChange={handleInput}
        type="number"
        placeholder="Enter your salary"
        name="salary"
      />
      Married:
      <input
        type="checkbox"
        name="marital_status"
        value={"married"}
        onChange={handleInput}
      />
      Unmarried:
      <input
        type="checkbox"
        name="marital_status"
        value={"unmarried"}
        onChange={handleInput}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

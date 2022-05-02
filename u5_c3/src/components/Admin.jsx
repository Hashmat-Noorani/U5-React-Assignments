import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { NewEmployeeContext } from "../contexts/NewEmployeeContext";

export const Admin = () => {
  const { handleNewEmployee } = useContext(NewEmployeeContext);

  const [formData, setFormData] = useState({});

  const handleInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitDetails = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/employee", formData)
      .then((d) => handleNewEmployee());
  };
  return (
    <form
      style={{
        margin: "30px auto",
        width: "400px",
        display: "flex",
        flexDirection: "column",
      }}
      className="createEmployee"
    >
      <input
        onChange={handleInput}
        type="text"
        placeholder="Employee Name"
        name="employee_name"
      />
      <input
        onChange={handleInput}
        type="text"
        placeholder="Employee id"
        name="employee_id"
      />
      <select onChange={handleInput} name="title">
        <option value="intern">Intern</option>
        <option value="Jr Software Developer">Jr Software Developer</option>
        <option value="Sr Software Developer">Sr Software Developer</option>
        <option value="Team Lead">Team Lead</option>
      </select>
      <input
        onChange={handleInput}
        type="number"
        placeholder="Salary"
        name="salary"
      />
      <input
        onChange={handleInput}
        type="text"
        placeholder="Image"
        name="image"
      />
      <input
        onChange={handleInput}
        type="text"
        placeholder="User Name"
        name="username"
      />
      <input
        onChange={handleInput}
        type="password"
        placeholder="Password"
        name="password"
      />
      <input
        onChange={handleInput}
        type="text"
        placeholder="Enter tasks separated by commas"
        name="tasks"
      />
      <select onChange={handleInput} name="status" id="status">
        <option value="">Select Status</option>
        <option value="terminated">Terminated</option>
        <option value="working">Working</option>
      </select>
      <select onChange={handleInput} name="team" id="team">
        <option value="">Select team</option>
        <option value="frontend">Frontend</option>
        <option value="backend">Backend</option>
        <option value="qa">QA</option>
      </select>
      <input
        onClick={submitDetails}
        className="createUser"
        type="submit"
        value={"submit"}
      />
    </form>
  );
};

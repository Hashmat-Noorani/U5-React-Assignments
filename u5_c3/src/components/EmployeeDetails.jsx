import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { TerminatedContext } from "../contexts/TerminatedContext";
import { PromotedContext } from "../contexts/PromotedContext";
import axios from "axios";
import { nanoid } from "nanoid";
export const EmployeeDetails = () => {
  const [employee, setEmployee] = useState({});
  const { id } = useParams();

  const { handleTerminated } = useContext(TerminatedContext);
  const { handlePromoted } = useContext(PromotedContext);

  useEffect(() => {
    fetchEmployee();
  }, []);

  const fetchEmployee = () => {
    axios
      .get(`http://localhost:8080/employee/${id}`)
      .then((d) => setEmployee(d.data));
  };
  return (
    <div
      className="user_details"
      style={{
        display: "flex",
        flexDirection: "column",
        width: "300px",
        margin: "20px auto",
        padding: "10px",
        boxShadow:
          "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px",
        borderRadius: "10px",
      }}
    >
      <img src={employee.image} width="100%" className="user_image" />
      <h4 className="user_name">{employee.employee_name}</h4>
      <span className="user_salary">${employee.salary}</span>
      <span className="tasks">
        {employee?.tasks?.map((e) => (
          <li key={nanoid()} className="task">
            {e}
          </li>
        ))}
      </span>
      Status: <b className="status">{employee.status}</b>
      Title: <b className="title">{employee.title}</b>
      {employee.status === "working" ? (
        <button onClick={handleTerminated} className="fire">
          Fire Employee
        </button>
      ) : null}
      {employee.title === "Team Lead" ? null : employee.status ===
        "terminated" ? null : (
        <button onClick={handlePromoted} className="promote">
          promote
        </button>
      )}
      {/* Show this button only if user is not already terminated (users status is working) */}
      {/* Show this button only if user is not already team lead or terminated */}
    </div>
  );
};

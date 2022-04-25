import axios from "axios";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { TerminatedContext } from "../contexts/TerminatedContext";
import { PromotedContext } from "../contexts/PromotedContext";
import { NewEmployeeContext } from "../contexts/NewEmployeeContext";

export const Home = ({ getdata }) => {
  const [employeeList, setEmployeeList] = useState([]);
  const { terminated } = useContext(TerminatedContext);
  const { promoted } = useContext(PromotedContext);
  const { newEmployee } = useContext(NewEmployeeContext);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    axios
      .get("http://localhost:8080/employee")
      .then((d) => setEmployeeList(d.data));
  };
  getdata(employeeList);

  // create statistics for user.
  // get Total user count from DB,
  // other fields are in memory values stored in context API.
  // they will reset to 0
  // if page gets refreshed

  // thins to store in context api
  //   total: get from db,
  //   terminated: 0, // inc when user in terminated
  //   promoted: 0,// inc when user in promoted
  //   total_new: 0,// inc when a new user in created

  return (
    <>
      <h3 className="welcome">Welcome To employee management system</h3>
      <div className="home">
        <span>Stats</span>
        <div>
          Total Employees:
          <span className="totalemp">{employeeList.length}</span>
        </div>
        <div>
          Total Terminated:{" "}
          <span className="total_terminated">{terminated}</span>
        </div>
        <div>
          Total Promoted: <span className="total_promoted">{promoted}</span>
        </div>
        <div>
          Total New: <span className="total_new">{newEmployee}</span>
        </div>
      </div>
    </>
  );
};

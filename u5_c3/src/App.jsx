import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { EmployeeList } from "./components/EmployeeList";
import { EmployeeDetails } from "./components/EmployeeDetails";
import { Admin } from "./components/Admin";
// import { ProtectedRoute } from "./components/PrivateRoute";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Logout } from "./components/Logout";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const getEmployeeList = (data) => {
    setData(data);
  };
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home getdata={getEmployeeList} />}></Route>
        <Route path={"/login"} element={<Login />}></Route>
        <Route path={"/logout"} element={<Logout />}></Route>
        <Route
          path={"/employees"}
          element={<EmployeeList data={data} />}
        ></Route>
        <Route
          path={"/employeedetails/:id"}
          element={<EmployeeDetails />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;

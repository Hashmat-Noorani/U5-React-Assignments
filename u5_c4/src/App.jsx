import { useSelector } from "react-redux";
import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { NewOrder } from "./components/NewOrder";
import { Orders } from "./components/Orders";
import { ProtectedRoute } from "./components/ProtextedRoute";

function App() {
  const { isAuth } = useSelector((state) => state.isAuth);
  return (
    <div className="App">
      <div>
        <Link className="nav-home" to="/">
          Home
        </Link>
        {isAuth ? (
          <Link className="nav-logout" to="/logout">
            Logout
          </Link>
        ) : (
          <Link className="nav-login" to="/login">
            Login
          </Link>
        )}
      </div>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <Orders />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/neworder"
          element={
            <ProtectedRoute>
              <NewOrder />
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;

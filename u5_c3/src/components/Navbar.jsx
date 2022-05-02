import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
export const Navbar = () => {
  const { isAuth } = useContext(AuthContext);
  return (
    <div
      className="navbar"
      style={{
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <Link className="nav-home" to="/">
        Home
      </Link>
      <Link className="nav-list" to="/employees">
        Employee List
      </Link>
      <Link className="nav-admin" to="/admin">
        Admin
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
  );
};

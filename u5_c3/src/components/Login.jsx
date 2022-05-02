import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const { handleAuth } = useContext(AuthContext);
  //  use reqres to log user in.

  return (
    <form
      style={{
        margin: "30px auto",
        width: "400px",
        display: "flex",
        flexDirection: "column",
      }}
      className="loginform"
    >
      <input
        name="username"
        type="text"
        placeholder="Enter username"
        className="login_username"
      />
      <input
        name="password"
        type="text"
        placeholder="Enter password"
        className="login_password"
      />
      <input
        onClick={(e) => {
          e.preventDefault();
          handleAuth(true);
          navigate(-1);
        }}
        type="submit"
        value="SIGN IN"
        className="login_submit"
      />
    </form>
  );
};

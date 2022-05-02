import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { login } from "../Redux/actions";

export const Login = () => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAuth = (e) => {
    e.preventDefault();
    axios.get("http://localhost:8080/users").then((data) => {
      data.data.map((e) => {
        if (e.username === name && e.pass === pass) {
          dispatch(login({ isAuth: true }));
          if (e.role === "admin") return navigate("/orders");
          return navigate("/neworder");
        }
      });
    });
  };
  return (
    <div>
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
        className="username"
        type="text"
        name="username"
        placeholder="Enter Username"
      />
      <input
        onChange={(e) => {
          setPass(e.target.value);
        }}
        className="password"
        type="password"
        name="password"
        placeholder="Enter password"
      />
      <button
        className="submit"
        onClick={(e) => {
          handleAuth(e);
        }}
      >
        Login
      </button>
    </div>
  );
};

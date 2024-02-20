import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/user";

const Login = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  return (
    <div className="Login">
      <h1>Login</h1>
      <div>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="number"
          placeholder="age"
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <button
        onClick={() => {
          dispatch(login({ name: name, email: email, age: age }));
          setAge(0);
          setEmail("");
          setName("");
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;

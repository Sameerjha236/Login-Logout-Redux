import React from "react";
import "./App.css";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Mode from "./components/Mode";
import { useSelector } from "react-redux";

const App = () => {
  const theme = useSelector((state) => state.theme.value);
  return (
    <div className="App" style={{ backgroundColor: theme }}>
      <Profile />
      <Login />
      <Logout />
      <Mode />
    </div>
  );
};

export default App;

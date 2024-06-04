import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import LandingPage from "./Page/LandingPage";
import Login from "./Page/Login";
import Order from "./Page/Order";

function App() {
  return (
    <div className="App">
      <LandingPage /> 
      <Login />
      <Order />
    </div>
  );
}

export default App;

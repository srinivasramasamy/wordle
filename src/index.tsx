import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";
import Wordle from "./components/Wordle";
import "./styles/styles.css";

ReactDOM.render(
  <React.StrictMode>
    <Wordle />
  </React.StrictMode>,
  document.getElementById("root")
);

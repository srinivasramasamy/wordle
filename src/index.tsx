import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";
import Wordle from "./Wordle";

ReactDOM.render(
  <React.StrictMode>
    <Wordle />
  </React.StrictMode>,
  document.getElementById("root")
);

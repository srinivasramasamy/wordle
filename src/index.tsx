import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";
import Wordle from "./components/Wordle";
import { solutions } from "./data/Data";
import "./styles/styles.css";

const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max);
};

ReactDOM.render(
  <React.StrictMode>
    <h1 className="d-flex justify-content-center">Wordle</h1>
    <Wordle solution={solutions[getRandomInt(solutions.length)]} />
  </React.StrictMode>,
  document.getElementById("root")
);

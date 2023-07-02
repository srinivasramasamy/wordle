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
    <Wordle solution={solutions[getRandomInt(solutions.length)]} />
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import { Top } from "./components/Top";
import { Counter } from "./components/ScoreBoard/Counter";

ReactDOM.render(
  <>
    <Counter>hello</Counter>
    <Top feature="Flag" firstAction="ctrl" secondAction="click">
      Minesweeper
    </Top>
  </>,
  document.getElementById("root")
);

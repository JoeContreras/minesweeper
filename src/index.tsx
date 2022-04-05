import React from "react";
import ReactDOM from "react-dom";
import { Top } from "./components/Top";
import { Counter } from "./components/ScoreBoard/Counter";
import { Scoreboard } from "./components/ScoreBoard";

ReactDOM.render(
  <>
    <Counter>hello</Counter>
    <Top feature="Flag" firstAction="ctrl" secondAction="click">
      Minesweeper
    </Top>
    <Scoreboard
      time="000"
      levels={["beginner", "intermediate", "expert"]}
      onReset={() => null}
      mines="010"
    />
  </>,
  document.getElementById("root")
);

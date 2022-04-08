import React from "react";
import { Top } from "./components/Top";
import { Counter } from "./components/ScoreBoard/Counter";
import { Scoreboard } from "./components/ScoreBoard";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
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
  </>
);

import React, { FC, useState } from "react";
import styled from "@emotion/styled";
import { Counter } from "./Counter";
import { Level } from "./Level";
import Reset from "./Reset";

export interface ScoreBoardProps {
  /**
   * Timer
   */
  time: string;
  /**
   * Possible game scenarios
   */
  levels: string[];
  /**
   * Action handler when the reset button is clicked
   */
  onReset: () => void;
  /**
   * # of bombs in the field
   */
  mines: string;
}

export const Scoreboard: FC<ScoreBoardProps> = ({
  time,
  levels,
  mines,
  onReset,
}) => {
  return (
    <Wrapper>
      <Counter>{time}</Counter>
      <Level>{levels}</Level>
      <Reset onReset={onReset} />
      <Counter>{mines}</Counter>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: max-content;
  padding-bottom: 2vw;
  justify-content: space-between;
`;

export default Scoreboard;

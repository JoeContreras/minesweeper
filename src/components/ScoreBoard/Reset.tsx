import React, { FC, useState } from "react";
import styled from "@emotion/styled";

export interface ResetProps {
  onReset: () => void;
}

const Reset: FC<ResetProps> = ({ onReset }) => {
  const [mouseDown, setMouseDown] = useState(false);

  const onMouseUp = () => {
    setMouseDown(false);
  };

  const onMouseDown = () => {
    setMouseDown(true);
  };
  return (
    <Button
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseUp}
      onMouseUp={onMouseUp}
      onClick={onReset}
    >
      {mouseDown ? "😮" : " 🙂"}
    </Button>
  );
};

const Button = styled.button`
  font-size: 1.5vw;
  cursor: pointer;
  font-weight: 700;
  border-width: 0.15vw;
  border-style: solid;
  background-color: #d1d1d1;
  border-color: white #9e9e9e #9e9e9e white;
`;

export default Reset;
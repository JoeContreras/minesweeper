import React, { FC } from "react";
import Reset from "./Reset";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Reset button check", () => {
  const ResetWithDummyHandlerOnReset: FC = () => <Reset onReset={() => null} />;
  it("should render elements with default state", () => {
    render(<ResetWithDummyHandlerOnReset />);
    const resetButton = screen.getByText("🙂");
    expect(resetButton).toBeInTheDOM();
  });
  it("onReset handler should be called", () => {
    const onReset = jest.fn();
    render(<Reset onReset={onReset} />);

    const resetButton = screen.getByText("🙂");
    fireEvent.click(resetButton);
    expect(onReset).toBeCalled();
  });
  it("should change state when onMouseDown and onMouseUp events happen", () => {
    render(<ResetWithDummyHandlerOnReset />);
    const resetButton = screen.getByText("🙂");
    fireEvent.mouseDown(resetButton);

    const resetButton2 = screen.getByText("😮");
    expect(resetButton2).toBeInTheDOM();

    fireEvent.mouseUp(resetButton2);
  });
  it("should change state when onMouseDown and onMouseLeave events happen", () => {
    render(<ResetWithDummyHandlerOnReset />);
    const resetButton = screen.getByText("🙂");
    fireEvent.mouseDown(resetButton);

    const resetButton2 = screen.getByText("😮");
    expect(resetButton2).toBeInTheDOM();

    fireEvent.mouseLeave(resetButton2);
  });
});

import React from "react";
import { CellState, Coords } from "@/helpers/Field";
import { Cell, isActiveCell } from "@/components/Grid/Cell";
import { createEvent, fireEvent, render, screen } from "@testing-library/react";

describe("Cell component check", () => {
  const coords: Coords = [1, 1];
  // loop to check every possible cell state
  for (let cell = CellState.empty; cell <= CellState.weakFlag; cell++) {
    it("check preventDefault ContextMenu for every type of cell", () => {
      const props = {
        coords,
        onClick: jest.fn(),
        onContextMenu: jest.fn(),
      };
      render(<Cell {...props}>{cell}</Cell>);
      // find component
      const cellComp = screen.getByTestId(`${cell}_${coords}`);
      // create event context menu for component
      const contextMenuEvent = createEvent.contextMenu(cellComp);
      // fire event contextMenu (right click) on component
      fireEvent(cellComp, contextMenuEvent);
      // expect default behaviour to be prevented
      expect(contextMenuEvent.defaultPrevented).toBe(true);
    });
    it("onClick  on onContextMenu should be called for active cells", () => {
      const props = {
        coords,
        onClick: jest.fn(),
        onContextMenu: jest.fn(),
      };
      render(<Cell {...props}>{cell}</Cell>);
      // find component
      const cellComp = screen.getByTestId(`${cell}_${coords}`);

      fireEvent.click(cellComp);
      fireEvent.contextMenu(cellComp);

      if (isActiveCell(cell)) {
        expect(props.onClick).toBeCalled();
        expect(props.onContextMenu).toBeCalled();
      } else {
        expect(props.onClick).not.toBeCalled();
        expect(props.onContextMenu).not.toBeCalled();
      }
    });
  }
});

import { act, renderHook } from "@testing-library/react-hooks";
import { useMouseDown } from "@/hooks/useMouseDown";

describe("useMouseDown hook test", () => {
  it("should toggle state on onMouseUp/onMouseDown calls", () => {
    const { result } = renderHook(useMouseDown);
    const [mouseDown, onMouseDown, onMouseUp] = result.current;

    expect(mouseDown).toBe(false);
    act(onMouseDown);
    expect(result.current[0]).toBe(true);
    act(onMouseUp);
    expect(result.current[0]).toBe(false);
    act(onMouseDown);
    expect(result.current[0]).toBe(true);
  });
});

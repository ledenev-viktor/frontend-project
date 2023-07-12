import { fireEvent, screen } from "@testing-library/react";
import { ComponentRender } from "shared/libs/test/componentRender/componentRender";
import { Counter } from "./counter";

describe("Counter", () => {
  test("Test counter render", () => {
    ComponentRender(<Counter />, { initialState: { counter: { value: 10 } } });

    expect(screen.getByTestId("value-title")).toHaveTextContent("10");
  });

  test("Test counter increment", () => {
    ComponentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    fireEvent.click(screen.getByTestId("increment-button"));
    expect(screen.getByTestId("value-title")).toHaveTextContent("11");
  });

  test("Test counter decrement", () => {
    ComponentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    fireEvent.click(screen.getByTestId("decrement-button"));
    expect(screen.getByTestId("value-title")).toHaveTextContent("9");
  });
});

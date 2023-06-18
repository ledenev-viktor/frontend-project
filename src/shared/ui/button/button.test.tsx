import { render, screen } from "@testing-library/react";
import { Button, ThemeButton } from "shared/ui/button/button";

describe("Button", () => {
  test("Test render", () => {
    render(<Button theme={ThemeButton.CLEAR}>Test</Button>);
    expect(screen.getByText("Test")).toBeInTheDocument();
    expect(screen.getByText("Test")).toHaveClass("clear");
  });

  test("Test theme clear", () => {
    render(<Button theme={ThemeButton.CLEAR}>Test</Button>);
    expect(screen.getByText("Test")).toHaveClass("clear");
  });
});

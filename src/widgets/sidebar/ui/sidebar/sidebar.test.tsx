import { fireEvent, screen } from "@testing-library/react";
import { renderWithTranslation } from "shared/libs/tests/renderWithTranslation/renderWithTranslation";
import { Sidebar } from "widgets/sidebar";

describe("Sidebar", () => {
  test("Test sidebar render", () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  test("Test sidebar toggle", () => {
    renderWithTranslation(<Sidebar />);
    const sidebar = screen.getByTestId("sidebar");
    const toggleBtn = screen.getByTestId("sidebar-toggle");
    expect(sidebar).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(sidebar).toHaveClass("collapsed");
  });
});

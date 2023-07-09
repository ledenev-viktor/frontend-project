import { fireEvent, screen } from "@testing-library/react";
import { ComponentRender } from "shared/libs/test/componentRender/componentRender";
import { Sidebar } from "widgets/sidebar";

describe("Sidebar", () => {
  test("Test sidebar render", () => {
    ComponentRender(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  test("Test sidebar toggle", () => {
    ComponentRender(<Sidebar />);
    const sidebar = screen.getByTestId("sidebar");
    const toggleBtn = screen.getByTestId("sidebar-toggle");
    expect(sidebar).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(sidebar).toHaveClass("collapsed");
  });
});

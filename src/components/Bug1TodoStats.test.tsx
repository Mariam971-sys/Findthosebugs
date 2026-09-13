import { render, screen } from "@testing-library/react";
import TodoStats from "./TodoStats";

describe("TodoStats", () => {
  it("visar hur många uppgifter som är kvar", () => {
    const todos = [
      { id: 1, text: "Handla", completed: false },
      { id: 2, text: "Städa", completed: true },
      { id: 3, text: "Plugga", completed: false },
    ];

    render(<TodoStats todos={todos} />);

    expect(screen.getByText("2 kvar av 3")).toBeInTheDocument();
  });
});
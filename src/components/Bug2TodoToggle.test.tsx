import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import TodoList from "./TodoList";

describe("TodoList", () => {
  it("skickar rätt todo-id när en uppgift markeras som klar", async () => {
    const user = userEvent.setup();

    const todos = [
      { id: 10, text: "Handla", completed: false },
      { id: 20, text: "Plugga", completed: false },
    ];

    const onToggle = vi.fn();
    const onDelete = vi.fn();

    render(
      <TodoList
        todos={todos}
        onToggle={onToggle}
        onDelete={onDelete}
      />
    );

    const checkboxes = screen.getAllByRole("checkbox");

    await user.click(checkboxes[1]);

    expect(onToggle).toHaveBeenCalledWith(20);
  });
});
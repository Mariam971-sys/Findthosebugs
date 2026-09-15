import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import TodoForm from "./TodoForm";

describe("TodoForm", () => {
  it("lägger inte till en tom uppgift", async () => {
    const user = userEvent.setup();
    const onAdd = vi.fn();

    render(<TodoForm onAdd={onAdd} />);

    const input = screen.getByLabelText("Ny uppgift");

    await user.type(input, "   ");
    await user.click(screen.getByRole("button", { name: "Lägg till" }));

    expect(onAdd).not.toHaveBeenCalled();
  });
});
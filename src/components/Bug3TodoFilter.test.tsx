import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoApp from "./TodoApp";

describe("TodoApp filter", () => {
  it("visar bara klara uppgifter när man klickar på Klara", async () => {
    const user = userEvent.setup();

    render(<TodoApp />);

    const input = screen.getByLabelText("Ny uppgift");

    await user.type(input, "Handla");
    await user.click(screen.getByRole("button", { name: "Lägg till" }));

    await user.type(input, "Plugga");
    await user.click(screen.getByRole("button", { name: "Lägg till" }));

    const checkboxes = screen.getAllByRole("checkbox");
    await user.click(checkboxes[0]);

    await user.click(screen.getByRole("button", { name: "Klara" }));

    expect(screen.getByText("Handla")).toBeInTheDocument();
    expect(screen.queryByText("Plugga")).not.toBeInTheDocument();
  });
});
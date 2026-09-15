import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import Post from "./Post";

describe("Post", () => {
  it("hämtar rätt post baserat på id", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        id: 2,
        title: "Post 2",
        body: "Innehåll för post 2",
      }),
    });

    vi.stubGlobal("fetch", fetchMock);

    render(<Post id={2} />);

    expect(fetchMock).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/posts/2"
    );

    expect(await screen.findByText("Post 2")).toBeInTheDocument();

    vi.unstubAllGlobals();
  });
});
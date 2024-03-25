import Home from "@/app/page";
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

test("Home", () => {
  render(<Home />);
  expect(screen.getByRole("heading", { level: 1, name: "Home" })).toBeDefined();
});

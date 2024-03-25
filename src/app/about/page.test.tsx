import About from "@/app/about/page";
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

test("Home", () => {
  render(<About />);
  expect(
    screen.getByRole("heading", { level: 1, name: "About" }),
  ).toBeDefined();
});

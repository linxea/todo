import React from "react";
import { render } from "@testing-library/react";
import TodoApp from "./TodoApp";

test("renders learn react link", () => {
  const { getByText } = render(<TodoApp />);
  const linkElement = getByText(/leetcode/i);
  expect(linkElement).toBeInTheDocument();
});

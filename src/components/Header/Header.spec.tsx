import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "./Header";

describe("Header", () => {
  it("renders correctly", () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});

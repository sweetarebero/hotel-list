import React from "react";
import { render } from "@testing-library/react";
import Hotels from "./Hotels";
import "@testing-library/jest-dom/extend-expect";

describe("Hotels render", () => {
  it("renders correctly", () => {
    const { container } = render(<Hotels />);
    expect(container).toMatchSnapshot();
  });
});

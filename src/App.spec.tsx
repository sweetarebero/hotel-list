import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("App render", () => {
  it("renders correctly", () => {
    const { container } = render(<App />);

    expect(container).toMatchSnapshot();
  });
});

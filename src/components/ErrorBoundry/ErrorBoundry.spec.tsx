import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ErrorBoundary from "./ErrorBoundry";

describe("Error Boundary render", () => {
  it("renders correctlty", () => {
    const { container } = render(
      <ErrorBoundary>
        <div>children</div>
      </ErrorBoundary>
    );

    expect(container).toMatchSnapshot();
  });
});

describe("Error Boundary error verification", () => {
  test("Error Boundary", () => {
    const ThrowError = () => {
      throw new Error("Test");
    };
    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    );
    expect(screen.getByTestId("errorboundary")).toBeVisible();
  });
});

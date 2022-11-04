import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import HotelCount from "./HotelCount";
import { city } from "../../models/global";

describe("HotelCount", () => {
  it("renders correctly", () => {
    const { container } = render(<HotelCount count={5} city={city} />);
    expect(container).toMatchSnapshot();

    const countText = screen.getByText(/5/i);
    const countryText = screen.getByText(/Sydney/i);
    expect(countText).toBeInTheDocument();
    expect(countryText).toBeInTheDocument();
  });
});

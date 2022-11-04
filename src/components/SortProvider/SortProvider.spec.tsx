import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SortContext } from "./SortProvider";
import { mockData } from "../../utils/testMockdata";
import HotelList from "../HotelList/HotelList";
import { Col, Row } from "reactstrap";
import HotelCount from "../HotelCount/HotelCount";
import SortHotel from "../SortHotels/SortHotel";
import { SortType } from "../../models/global";

it("should log a user in", () => {
  const updateSortType = jest.fn();
  const sortType = SortType.PRICE_HIGH_LOW;
  const { getByText } = render(
    <SortContext.Provider value={{ sortType, updateSortType }}>
      <div className="sort-section">
        <Row>
          <Col>
            <HotelCount count={mockData.length} city="Sydney" />
          </Col>
          <Col>
            <SortHotel />
          </Col>
        </Row>
      </div>
      <HotelList hotels={mockData} />
    </SortContext.Provider>
  );

  const inputField = screen.getByTestId("select-sort-dropdown");
  fireEvent.change(inputField, {
    target: {
      value: SortType.PRICE_HIGH_LOW,
    },
  });
  expect(updateSortType).toHaveBeenCalledTimes(1);

  const element = screen.getByTestId("hotel1-title");
  expect(element).toHaveTextContent(/(PARKROYAL)/i);
});

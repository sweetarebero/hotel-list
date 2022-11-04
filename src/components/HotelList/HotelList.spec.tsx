import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import HotelList from "./HotelList";
import { CancellationType, Hotel, RatingType } from "../../models/hotel";

const mockTitle = "myTitle";

const mockData: Hotel[] = [
  {
    id: "cxd650nuyo",
    property: {
      propertyId: "P107801",
      title: mockTitle,
      address: ["7-11 Talavera Rd", "North Ryde"],
      previewImage: {
        url: "https://unsplash.it/145/125/?random",
        caption: "Image of Courtyard by Marriott Sydney-North Ryde",
        imageType: "PRIMARY",
      },
      rating: {
        ratingValue: 4.5,
        ratingType: RatingType.SELF,
      },
    },
    offer: {
      promotion: {
        title: "Exclusive Deal",
        type: "MEMBER",
      },
      name: "Deluxe Balcony Room",
      displayPrice: {
        amount: 329.0,
        currency: "AUD",
      },
      savings: {
        amount: 30.0,
        currency: "AUD",
      },
      cancellationOption: {
        cancellationType: CancellationType.FREE_CANCELLATION,
      },
    },
  },
];

describe("HotelList", () => {
  it("renders correctly", () => {
    render(<HotelList hotels={mockData} />);

    const element = screen.getByTestId("hotel1-title");
    expect(element).toHaveTextContent(mockTitle);
  });
});

import { SortDirection, sortHotelsByPrice } from "./sortHotelsByPrice";
import { mockData, sortedAsc, sortedDesc } from "./testMockdata";

describe("check sorting order of hotel prices", () => {
  it("low to high price order", () => {
    const sortedList = sortHotelsByPrice(mockData);
    expect(sortedList).toEqual(sortedAsc);
  });

  it("high to low price order", () => {
    const sortedListReverse = sortHotelsByPrice(mockData, SortDirection.DESC);
    expect(sortedListReverse).toEqual(sortedDesc);
  });
});

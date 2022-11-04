import * as React from "react";

interface Props {
  count: number;
  city: string;
}

const HotelCount = ({ count, city }: Props) => {
  return (
    <p>
      <b>{count}</b> <i> hotels in</i> <b>{city}</b>
    </p>
  );
};

export default HotelCount;

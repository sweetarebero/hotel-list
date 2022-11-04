import * as React from "react";
import { RatingType } from "../../models/hotel";
import "./Rating.scss";

interface Props {
  rating: number;
  ratingType: RatingType;
}

const Rating = ({ rating, ratingType }: Props) => {
  const style = { "--rating": rating } as React.CSSProperties;

  return (
    <div
      className={ratingType === RatingType.STAR ? "star" : "circle"}
      style={style}
      aria-label={`Rating of this product is ${rating} out of 5.`}
    ></div>
  );
};

export default Rating;

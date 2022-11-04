import * as React from "react";
import { Col, Row } from "reactstrap";
import { CancellationType, Hotel } from "../../models/hotel";
import { sentenceCase } from "../../utils/sentenceCase";
import Rating from "../Rating/Rating";
import { truncate } from "lodash";
import { SortContext } from "../SortProvider/SortProvider";
import { SortType } from "../../models/global";

import "./HotelList.scss";
import {
  SortDirection,
  sortHotelsByPrice,
} from "../../utils/sortHotelsByPrice";

interface Props {
  hotels: Hotel[];
}

const HotelList = ({ hotels }: Props) => {
  const { sortType } = React.useContext(SortContext);

  const sortedHotels = sortHotelsByPrice(
    hotels,
    sortType === SortType.PRICE_LOW_HIGH
      ? SortDirection.ASC
      : SortDirection.DESC
  );

  return (
    <div className="HotelList" data-testid="hotel-list">
      {sortedHotels.map((hotel: Hotel, index: number) => (
        <Row key={hotel.id} data-testid={`hotel${index + 1}`}>
          <Col sm="12" md="2" className="hotel-image">
            <img
              src={hotel.property.previewImage.url}
              alt={hotel.property.previewImage.caption}
            />
            <figcaption className="top-right">
              {hotel.offer.promotion.title}
            </figcaption>
          </Col>
          <Col sm="12" md="6" className="hotel-details">
            <div className="flex-container">
              <div>
                <h4
                  className="hotel-details-title"
                  title={hotel.property.title}
                  data-testid={`hotel${index + 1}-title`}
                >
                  {truncate(hotel.property.title)}
                </h4>
                <small className="hotel-details-address">
                  {hotel.property.address.map((a: string) => `${a}${" "}`)}
                </small>
                <p className="hotel-details-name">{hotel.offer.name}</p>
                {hotel.offer.cancellationOption.cancellationType ===
                  CancellationType.FREE_CANCELLATION && (
                  <p className="hotel-details-cancellation">
                    {sentenceCase(
                      hotel.offer.cancellationOption.cancellationType
                    )}
                  </p>
                )}
              </div>
              <div>
                <Rating
                  rating={hotel.property.rating.ratingValue}
                  ratingType={hotel.property.rating.ratingType}
                />
              </div>
            </div>
          </Col>
          <Col sm="12" md="3" className="price-details">
            <div>
              <small className="price-details-currency">
                1 night total ({hotel.offer.displayPrice.currency})
              </small>
              <p className="price-details-amount">
                <sup>$</sup>
                {hotel.offer.displayPrice.amount}
              </p>
              <p className="price-details-savings">
                {hotel.offer.savings?.amount && (
                  <>
                    Save ${hotel.offer.savings?.amount}
                    <sup>~</sup>
                  </>
                )}
              </p>
            </div>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default HotelList;

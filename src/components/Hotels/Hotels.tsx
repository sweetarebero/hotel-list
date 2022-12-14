import * as React from "react";
import useAxios from "axios-hooks";
import { Col, Row } from "reactstrap";
import HotelCount from "../HotelCount/HotelCount";
import HotelList from "../HotelList/HotelList";
import SortHotel from "../SortHotels/SortHotel";
import SortProvider from "../SortProvider/SortProvider";
import { city } from "../../models/global";

import "./Hotels.scss";

interface Props {}

const Hotels = (props: Props) => {
  const [{ data, loading, error }] = useAxios("http://localhost:4000/results");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <SortProvider>
      <div className="Hotels">
        <Row className="sort-section">
          <Col>
            <HotelCount count={data.length} city={city} />
          </Col>
          <Col>
            <SortHotel />
          </Col>
        </Row>
      </div>
      <HotelList hotels={data} />
    </SortProvider>
  );
};

export default Hotels;

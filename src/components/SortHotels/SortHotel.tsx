import * as React from "react";
import { Input } from "reactstrap";
import { SortType } from "../../models/global";
import { SortContext } from "../SortProvider/SortProvider";

import "./SortHotel.scss";

interface Props {}

const SortHotel = (props: Props) => {
  const { updateSortType } = React.useContext(SortContext);

  return (
    <Input
      data-testid="select-sort-dropdown"
      id="selectSortType"
      name="selectSortType"
      type="select"
      className="SortHotel"
      onChange={(e) => updateSortType(e.target.value as SortType)}
    >
      <option value={SortType.PRICE_LOW_HIGH}>{SortType.PRICE_LOW_HIGH}</option>
      <option value={SortType.PRICE_HIGH_LOW}>{SortType.PRICE_HIGH_LOW}</option>
    </Input>
  );
};

export default SortHotel;

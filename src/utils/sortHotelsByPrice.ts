/**
 * @description
 * sort hotel list by asc or desc
 */

import { orderBy } from "lodash";
import { Hotel } from "../models/hotel";

export enum SortDirection {
  ASC = "asc",
  DESC = "desc",
}

export const sortHotelsByPrice = (
  list: Hotel[],
  sortDirection: SortDirection = SortDirection.ASC
) => {
  return orderBy(list, (item) => item.offer.displayPrice.amount, sortDirection);
};

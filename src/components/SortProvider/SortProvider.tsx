import * as React from "react";
import { SortType } from "../../models/global";

interface SortContextType {
  sortType: SortType;
  updateSortType: (sortType: SortType) => void;
}

const SortContextInitiaValue: SortContextType = {
  sortType: SortType.PRICE_LOW_HIGH,
  updateSortType: () => {},
};

export const SortContext = React.createContext<SortContextType>(
  SortContextInitiaValue
);

interface SortProviderProps {
  children: React.ReactNode;
}

const SortProvider: React.FC<SortProviderProps> = ({ children }) => {
  const [sortType, setSortType] = React.useState(SortType.PRICE_LOW_HIGH);

  const updateSortType = (stype: SortType) => {
    setSortType(stype);
  };

  return (
    <SortContext.Provider value={{ sortType, updateSortType }}>
      {children}
    </SortContext.Provider>
  );
};

export default SortProvider;

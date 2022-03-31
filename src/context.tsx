import { createContext } from "react";
type UserContextType = {
  billValue: number;
  setBillValue: (bill: number) => void;
  peoplenum: number;
  setPeoplenum: (people: number) => void;
  percentage: number;
  setPercentage: (percent: number) => void;
};
export const TextFeildContext = createContext<UserContextType>({
  billValue: 0,
  setBillValue: () => {},
  peoplenum: 0,
  setPeoplenum: () => {},
  percentage: 0,
  setPercentage: () => {},
});

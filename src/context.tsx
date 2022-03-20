import { createContext } from "react";
type UserContextType = {
  billValue: number;
  setBillValue: (bill: number) => void;
};
export const TextFeildContext = createContext<UserContextType>({
  billValue: 0,
  setBillValue: () => {},
});
type PeopleContextType = {
  peoplenum: number;
  setPeoplenum: (people: number) => void;
};
export const PeopleFeildContext = createContext<PeopleContextType>({
  peoplenum: 0,
  setPeoplenum: () => {},
});

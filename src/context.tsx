import React, { createContext, useState } from "react";
type UserContextType = {
  billValue: number;
  setBillValue: (bill: number) => void;
};
export const TextFeildContext = createContext<UserContextType>({
  billValue: 0,
  setBillValue: () => {},
});
// export const InputValues = (props: any) => {
//   // let [billValue, setBillValue] = useState(0);
//   // let [peopleNumber, setPeopleNumber] = useState(0);
//   return (
//     <TextFeildContext.Provider
//       value={{
//         billValue,
//         setBillValue,
//         peopleNumber,
//         setPeopleNumber,
//       }}
//     >
//       {props}
//     </TextFeildContext.Provider>
//   );
// };

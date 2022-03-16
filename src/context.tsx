import React, { createContext, useState } from "react";
export const TextFeildContext = createContext({});

export const InputValues = (props: any) => {
  let [billValue, setBillValue] = useState(0);
  let [peopleNumber, setPeopleNumber] = useState(0);
  return (
    <TextFeildContext.Provider
      value={{
        billValue,
        setBillValue,
        peopleNumber,
        setPeopleNumber,
      }}
    >
      {/* {props} */}
    </TextFeildContext.Provider>
  );
};

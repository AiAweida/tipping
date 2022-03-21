import React, { useState } from "react";
import { TextFeildContext } from "context";
import { Header } from "Containers/Header";
import { InputLayout } from "Containers/Layout";
import { OutputLayout } from "Containers/output";
import "App.css";
export default function App() {
  let [perPerson, setperPerson] = useState(0);
  let [total, setTotal] = useState(0);
  let [buttonValue, setButtonValue] = useState(0);

  const resetcallback = () => {
    setTotal(0);
    setperPerson(0);
    setBillValue(0);
    setPeoplenum(1);
    setPercentage(0);
    setButtonValue(0);
  };
  let [billValue, setBillValue] = useState(0);
  let [peoplenum, setPeoplenum] = useState(1);
  const [percentage, setPercentage] = useState(0);
  return (
    <div className="App">
      <Header />

      <TextFeildContext.Provider
        value={{
          billValue,
          setBillValue,
          peoplenum,
          setPeoplenum,
          percentage,
          setPercentage,
        }}
      >
        <main className="Container__in-out">
          <InputLayout />

          <OutputLayout reset={resetcallback} />
        </main>
      </TextFeildContext.Provider>
    </div>
  );
}

import React, { useState } from "react";
import { TextFeildContext } from "context";
import { Header } from "Containers/Header";
import { InputLayout } from "Containers/Layout";
import { OutputLayout } from "Containers/output";
import "App.css";
export default function App() {
  let [perPerson, setperPerson] = useState(0);
  let [total, setTotal] = useState(0);
  const getvalues = (totaltopay: number, personToPay: number) => {
    setperPerson(personToPay);
    setTotal(totaltopay);
  };
  const resetcallback = () => {
    setTotal(0);
    setperPerson(0);
    setBillValue(0);
    setPeoplenum(1);
    setCustomPercent("");
  };
  let [billValue, setBillValue] = useState(0);
  let [peoplenum, setPeoplenum] = useState(1);
  const [customPercent, setCustomPercent] = useState("");
  return (
    <div className="App">
      <Header />

      <TextFeildContext.Provider
        value={{
          billValue,
          setBillValue,
          peoplenum,
          setPeoplenum,
          customPercent,
          setCustomPercent,
        }}
      >
        <main className="Container__in-out">
          <InputLayout setvalues={getvalues} />

          <OutputLayout
            reset={resetcallback}
            totalToPay={total}
            perPersonToPay={perPerson}
          />
        </main>
      </TextFeildContext.Provider>
    </div>
  );
}

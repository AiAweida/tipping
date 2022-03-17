import React, { createContext, useState } from "react";
import { TextFeildContext } from "context";
import { Header } from "Containers/Header";
import { InputLayout } from "Containers/Layout";
import { OutputLayout } from "Containers/output";
import "App.css";
export default function App() {
  let [perPerson, setperPerson] = useState(0);
  let [total, setTotal] = useState(0);
  let [billed, setBilled] = useState(0);
  let [poeplnum, setPoeplNum] = useState(0);
  let [custom, setCustom] = useState("");
  const getvalues = (
    totaltopay: number,
    personToPay: number,
    bill: number,
    percentage: string,
    people: number
  ) => {
    setperPerson(personToPay);
    setTotal(totaltopay);
    setCustom(percentage);
    setPoeplNum(people);
    setBilled(bill);
  };
  const resetcallback = () => {
    setTotal(0);
    setperPerson(0);
    setBilled(0);
    setCustom("");
    setPoeplNum(1);
  };
  const [billValue, setBillValue] = useState(0);

  return (
    <div className="App">
      <Header />
      <TextFeildContext.Provider value={{ billValue, setBillValue }}>
        <main className="Container__in-out">
          <InputLayout
            setvalues={getvalues}
            valueofbill={billValue}
            peopleNumber={poeplnum}
            customPercent={custom}
          />

          <OutputLayout
            reset={resetcallback}
            totalToPay={total}
            perPersonToPay={perPerson}
            bill={billValue}
            people={poeplnum}
          />
        </main>
      </TextFeildContext.Provider>
    </div>
  );
}

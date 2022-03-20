import React, { useState } from "react";
import { TextFeildContext, PeopleFeildContext } from "context";
import { Header } from "Containers/Header";
import { InputLayout } from "Containers/Layout";
import { OutputLayout } from "Containers/output";
import "App.css";
export default function App() {
  let [perPerson, setperPerson] = useState(0);
  let [total, setTotal] = useState(0);
  let [custom, setCustom] = useState("");
  const getvalues = (
    totaltopay: number,
    personToPay: number,
    percentage: string
  ) => {
    setperPerson(personToPay);
    setTotal(totaltopay);
    setCustom(percentage);
  };
  const resetcallback = () => {
    setTotal(0);
    setperPerson(0);
    setBillValue(0);
    setCustom("");
    setPeoplenum(1);
  };
  let [billValue, setBillValue] = useState(0);
  let [peoplenum, setPeoplenum] = useState(1);
  return (
    <div className="App">
      <Header />
      <PeopleFeildContext.Provider value={{ peoplenum, setPeoplenum }}>
        <TextFeildContext.Provider value={{ billValue, setBillValue }}>
          <main className="Container__in-out">
            <InputLayout setvalues={getvalues} customPercent={custom} />

            <OutputLayout
              reset={resetcallback}
              totalToPay={total}
              perPersonToPay={perPerson}
            />
          </main>
        </TextFeildContext.Provider>
      </PeopleFeildContext.Provider>
    </div>
  );
}

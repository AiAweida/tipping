import * as React from "react";
import "App.css";
import { Header } from "Containers/Header";
import { InputLayout } from "Containers/Layout";
import { OutputLayout } from "Containers/output";
import { useState } from "react";

function App() {
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
  const resetcallback = (newValue: number) => {
    setTotal(newValue);
    setperPerson(newValue);
    setBilled(newValue);
    setCustom("");
    setPoeplNum(1);
  };
  return (
    <div className="App">
      <Header />
      <main className="Container__in-out">
        <InputLayout
          setvalues={getvalues}
          valueofbill={billed}
          peopleNumber={poeplnum}
          customPercent={custom}
        />
        <OutputLayout
          reset={resetcallback}
          totaltopay={total}
          perpersontopay={perPerson}
        />
      </main>
    </div>
  );
}

export default App;

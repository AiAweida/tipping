import * as React from "react";
import "App.css";
import { Header } from "Containers/Header";
import { InputLayout } from "Containers/Layout";
import { OutputLayout } from "Containers/output";
import { useState } from "react";

function App() {
  let [perPerson, setperPerson] = useState(0);
  let [total, setTotal] = useState(0);
  const getvalues = (totaltopay: number, personToPay: number) => {
    setperPerson(personToPay);
    setTotal(totaltopay);
  };
  const resetcallback = (newValue: number) => {
    setTotal(newValue);
    setperPerson(newValue);
  };
  return (
    <div className="App">
      <Header />
      <div className="flexdir">
        <InputLayout setvalues={getvalues} />
        <OutputLayout
          totaltopay={total}
          perpersontopay={perPerson}
          reset={resetcallback}
        />
      </div>
    </div>
  );
}

export default App;

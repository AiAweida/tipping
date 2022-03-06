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

  return (
    <div className="App">
      <Header />
      <InputLayout
        totaltipped={total}
        payperperson={perPerson}
        setvalues={getvalues}
      />
      <OutputLayout totaltopay={total} perpersontopay={perPerson} />
    </div>
  );
}

export default App;

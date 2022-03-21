import React, { useState } from "react";
import { TextFeildContext } from "context";
import { Header } from "Containers/Header";
import { InputLayout } from "Containers/Layout";
import { OutputLayout } from "Containers/output";
import "App.css";
export default function App() {
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

          <OutputLayout />
        </main>
      </TextFeildContext.Provider>
    </div>
  );
}

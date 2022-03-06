/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Button from "Components/Button/button";
import TextInput from "Components/Textbox/textbox";
import person from "images/person.svg";
import Bill from "images/dollar.svg";
import Custom from "Components/Custom/custom";
import "App.css";
interface buttonprops {
  totaltipped: number;
  payperperson: number;
  setvalues: (newvalue: number, second: number) => void;
}
export const InputLayout: React.FC<buttonprops> = ({
  totaltipped,
  payperperson,
  setvalues,
}) => {
  let [customPercentage, setCustomPercentage] = useState<number>(0); // custom percentage
  let [perPerson, setperPerson] = useState<number>(0); //perperson to tip
  let [total, setTotal] = useState<number>(0); // total tip ammount;
  let [people, setPeoaple] = useState<number>(1); // how many people passed from child as props
  let [bill, setBill] = useState<number>(0); // the bill passed as props from child
  //for reset
  useEffect(() => {
    total = bill * customPercentage;
    perPerson = total / people;
    setTotal(total);
    setperPerson(perPerson);
    setvalues(total, perPerson);
  }, [bill, people, customPercentage]); // this array reapplies to the dom when any of these values changes

  return (
    <div className="Container">
      <div className="Input__container">
        <p>Bill</p>
        <TextInput
          userSetBill={(value) => setBill(value)}
          value={bill}
          icon={Bill}
          label="bill"
          iden="bill"
        />
        <p>Select Tip %</p>
        <div className="Button__container">
          <Button
            symbol="5%"
            percentage={0.05}
            setTipPercentage={setCustomPercentage}
          />
          <Button
            symbol="10%"
            percentage={0.1}
            setTipPercentage={setCustomPercentage}
          />
          <Button
            symbol="15%"
            percentage={0.15}
            setTipPercentage={setCustomPercentage}
          />
          <Button
            symbol="25%"
            percentage={0.25}
            setTipPercentage={setCustomPercentage}
          />
          <Button
            symbol="50%"
            percentage={0.5}
            setTipPercentage={setCustomPercentage}
          />

          <Custom
            userPercentage={(value) => setCustomPercentage(value)}
            value={customPercentage}
          />
        </div>
        <p>Number Of People</p>
        <TextInput
          userSetBill={(value) => setPeoaple(value)}
          value={people}
          icon={person}
          label="person"
          iden="people"
        />
      </div>
    </div>
  );
};

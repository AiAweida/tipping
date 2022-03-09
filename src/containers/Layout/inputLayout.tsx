/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Button from "Components/Button/button";
import TextInput from "Components/Textbox/textbox";
import person from "images/person.svg";
import Bill from "images/dollar.svg";
import Custom from "Components/Custom/custom";
import "./inputlayout.css";
import "App.css";
interface Buttonprops {
  setvalues: (
    total: number,
    perperson: number,
    bill: number,
    custompercentage: string,
    people: number
  ) => void;
  valueofbill: number;
  peopleNumber: number;
  customPercent: string;
}
export const InputLayout: React.FC<Buttonprops> = ({
  setvalues,
  valueofbill,
  peopleNumber,
  customPercent,
}) => {
  let [buttonValue, setButtonValue] = useState(0);
  let [customPercentage, setCustomPercentage] = useState("");
  let [perPerson, setperPerson] = useState<number>(0);
  let [total, setTotal] = useState<number>(0);
  let [people, setPeoaple] = useState<number>(1);
  let [bill, setBill] = useState<number>(0);
  let x;
  useEffect(() => {
    x = parseInt(customPercent)
      ? buttonValue
      : parseInt(customPercentage) / 100;
    total = x * bill;
    peopleNumber = people;
    perPerson = total / people;
    valueofbill = bill;
    setTotal(total);
    setperPerson(perPerson);
    setvalues(total, perPerson, bill, customPercentage, people);
  }, [bill, people, customPercentage, buttonValue, x]);

  return (
    <div className="Container">
      <div className="Input__container">
        <p>Bill</p>
        <TextInput
          userSetBill={(value) => setBill(value)}
          value={valueofbill}
          icon={Bill}
          label="bill"
          iden="bill"
        />
        <p>Select Tip %</p>
        <div className="Button__container">
          <Button
            symbol="5%"
            percentage={0.05}
            setTipPercentage={setButtonValue}
          />
          <Button
            symbol="10%"
            percentage={0.1}
            setTipPercentage={setButtonValue}
          />
          <Button
            symbol="15%"
            percentage={0.15}
            setTipPercentage={setButtonValue}
          />
          <Button
            symbol="25%"
            percentage={0.25}
            setTipPercentage={setButtonValue}
          />
          <Button
            symbol="50%"
            percentage={0.5}
            setTipPercentage={setButtonValue}
          />

          <Custom
            userPercentage={(value) => setCustomPercentage(value)}
            value={customPercent}
          />
        </div>
        <p>Number Of People</p>
        <TextInput
          userSetBill={(value) => setPeoaple(value)}
          value={peopleNumber}
          icon={person}
          label="person"
          iden="people"
        />
      </div>
    </div>
  );
};

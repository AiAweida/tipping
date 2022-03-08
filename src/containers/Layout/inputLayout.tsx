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
  let [customPercentage, setCustomPercentage] = useState(""); // custom percentage
  let [perPerson, setperPerson] = useState<number>(0); //perperson to tip
  let [total, setTotal] = useState<number>(0); // total tip ammount;
  let [people, setPeoaple] = useState<number>(1); // how many people passed from child as props
  let [bill, setBill] = useState<number>(0); // the bill passed as props from child
  useEffect(() => {
    total = bill * (parseInt(customPercentage) / 100);
    peopleNumber = people;
    perPerson = total / people;
    valueofbill = bill;
    customPercent = customPercentage;
    setTotal(total);
    setperPerson(perPerson);
    setvalues(total, perPerson, bill, customPercentage, people);
  }, [bill, people, customPercentage]); // this array reapplies to the dom when any of these values changes

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
            percentage={"5"}
            setTipPercentage={setCustomPercentage}
          />
          <Button
            symbol="10%"
            percentage={"10"}
            setTipPercentage={setCustomPercentage}
          />
          <Button
            symbol="15%"
            percentage={"15"}
            setTipPercentage={setCustomPercentage}
          />
          <Button
            symbol="25%"
            percentage={"25"}
            setTipPercentage={setCustomPercentage}
          />
          <Button
            symbol="50%"
            percentage={"50"}
            setTipPercentage={setCustomPercentage}
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

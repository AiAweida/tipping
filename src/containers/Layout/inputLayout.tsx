import React, { useState, useEffect } from "react";
import Button from "Components/Button/button";
import TextInput from "Components/Textbox/textbox";
import person from "images/person.svg";
import Bill from "images/dollar.svg";
import Custom from "Components/Custom/custom";
import "./inputlayout.css";

interface InputLayoutProps {
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
export const InputLayout: React.FC<InputLayoutProps> = ({
  setvalues,
  valueofbill,
  peopleNumber,
  customPercent,
}) => {
  let [buttonValue, setButtonValue] = useState<number>(0);
  let [customPercentage, setCustomPercentage] = useState("");
  let [perPerson, setperPerson] = useState<number>(0);
  let [total, setTotal] = useState<number>(0);
  let [people, setPeoaple] = useState<number>(1);
  let [bill, setBill] = useState<number>(0);

  useEffect(() => {
    let percentValue: number = 0;
    if (customPercentage !== "") {
      percentValue = parseInt(customPercentage) / 100;
    }
    if (buttonValue > 0) {
      percentValue = buttonValue;
    }
    if (customPercentage === "" && buttonValue === 0) {
      percentValue = 1;
    }
    total = percentValue * bill;
    peopleNumber = people;
    perPerson = total / people;
    valueofbill = bill;
    setTotal(total);
    setperPerson(perPerson);
    setvalues(total, perPerson, bill, customPercentage, people);
  }, [bill, people, customPercentage, buttonValue]);

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
            resetCustomValue={(value) => setCustomPercentage(value)}
            symbol="5%"
            percentage={0.05}
            setTipPercentage={setButtonValue}
          />
          <Button
            resetCustomValue={setCustomPercentage}
            symbol="10%"
            percentage={0.1}
            setTipPercentage={setButtonValue}
          />
          <Button
            resetCustomValue={setCustomPercentage}
            symbol="15%"
            percentage={0.15}
            setTipPercentage={setButtonValue}
          />
          <Button
            resetCustomValue={setCustomPercentage}
            symbol="25%"
            percentage={0.25}
            setTipPercentage={setButtonValue}
          />
          <Button
            resetCustomValue={setCustomPercentage}
            symbol="50%"
            percentage={0.5}
            setTipPercentage={(value) => setButtonValue(value)}
          />

          <Custom
            userPercentage={(value) => setCustomPercentage(value)}
            value={customPercent}
            resetButtonValue={setButtonValue}
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

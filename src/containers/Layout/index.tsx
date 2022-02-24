import React, { useState } from "react";
import Button from "Components/Button/button";
import TextInput from "Components/Textbox/textbox";
import person from "images/person.svg";
import Bill from "images/dollar.svg";
import Custom from "Components/Custom/custom";
import OutPutText from "Components/Outputtext/outputtext";
import Reset from "Components/reset/reset";
import "App.css";
interface buttonprops {}
export const InputLayout: React.FC<buttonprops> = () => {
  const [tipAmount, setTipAmount] = useState(1);
  const [total, setTotal] = useState(1);
  const [bill, setBill] = useState(0);
  const [numOfPeople, setNumOfPeople] = useState("0");
  //for reset
  const resetCallback = (newValue: number) => {
    setTipAmount(newValue);
    setTotal(newValue);
  };
  //to calculate tip
  const tipCalculate = (total = bill * tipAmount) => {
    setTotal(total);
    setTipAmount(tipAmount);
  };
  const peopleNumber = () => {
    setNumOfPeople(numOfPeople);
  };
  const billamount = (newValue = bill) => {
    setBill(newValue);
  };
  return (
    <div className="Container">
      <div className="Input__container">
        <TextInput icon={Bill} label="bill" iden="bill" />
        <p>Select Tip %</p>
        <div className="Button__container">
          <Button symbol="5%" value={0.05} total={tipCalculate} />
          <Button symbol="10%" value={0.1} total={tipCalculate} />
          <Button symbol="15%" value={0.15} total={tipCalculate} />
          <Button symbol="25%" value={0.25} total={tipCalculate} />
          <Button symbol="50%" value={0.5} total={tipCalculate} />
          <Custom />
        </div>
        <TextInput icon={person} label="Number Of People" iden="person" />
      </div>
      <div className="Output__Container">
        <OutPutText title="tip amount" value={tipAmount} />
        <OutPutText title="total" value={total} />
        <div className="Reset__Layout">
          <Reset reset={resetCallback} />
        </div>
      </div>
    </div>
  );
};

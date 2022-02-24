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
  // const [tipAmount, setTipAmount] = useState(1);
  const [perPerson, setperPerson] = useState(3);
  const [total, setTotal] = useState(1);
  const [people, setPeoaple] = useState<number>(2);
  //for reset
  const resetCallback = (resetValue: number) => {
    setperPerson(resetValue);
    setTotal(resetValue);
  };
  const tipcal = (tipvalue: number) => {
    setPeoaple(tipvalue);
    return people;
  };

  return (
    <div className="Container">
      <div className="Input__container">
        <TextInput valuee={people} icon={Bill} label="bill" iden="bill" />
        <p>Select Tip %</p>
        <div className="Button__container">
          <Button people={people} symbol="5%" value={0.05} />
          <Button people={people} symbol="10%" value={0.1} />
          <Button people={people} symbol="15%" value={0.15} />
          <Button people={people} symbol="25%" value={0.25} />
          <Button people={people} symbol="50%" value={0.5} />
          <Custom />
        </div>
        <TextInput
          valuee={people}
          icon={person}
          label="Number Of People"
          iden="person"
        />
      </div>
      <div className="Output__Container">
        <OutPutText title="tip amount" value={perPerson} />
        <OutPutText title="total" value={total} />
        <div className="Reset__Layout">
          <Reset reset={resetCallback} />
        </div>
      </div>
    </div>
  );
};

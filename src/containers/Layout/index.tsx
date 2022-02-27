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
  let [perPerson, setperPerson] = useState<number>(0); //perperson to pay
  let [total, setTotal] = useState<number>(0); // total tip ammount
  let [people, setPeoaple] = useState<number>(0); // how many people
  let [bill, setBill] = useState<number>(0); // the bill
  //for reset
  const resetCallback = (resetValue: number) => {
    setperPerson(resetValue);
    setTotal(resetValue);
  };

  const takeBill = (x: number) => {
    setBill(x);
  };

  const takepeople = (p: number) => {
    setPeoaple(p);
  };
  const calculateTip = (x: number) => {
    setTotal(x);
    setperPerson(x / people);
  };

  return (
    <div className="Container">
      <div className="Input__container">
        <TextInput
          tempo={takeBill}
          value={bill}
          icon={Bill}
          label="bill"
          iden="bill"
        />
        <p>Select Tip %</p>
        <div className="Button__container">
          <Button
            total={calculateTip}
            symbol="5%"
            percentage={0.05}
            billValue={bill}
          />
          <Button
            total={calculateTip}
            symbol="10%"
            percentage={0.1}
            billValue={bill}
          />
          <Button
            total={calculateTip}
            symbol="15%"
            percentage={0.15}
            billValue={bill}
          />

          <Button
            total={calculateTip}
            symbol="25%"
            percentage={0.25}
            billValue={bill}
          />

          <Button
            total={calculateTip}
            billValue={bill}
            symbol="50%"
            percentage={0.5}
          />
          <Custom />
        </div>
        <TextInput
          tempo={takepeople}
          value={people}
          icon={person}
          label="person"
          iden="people"
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

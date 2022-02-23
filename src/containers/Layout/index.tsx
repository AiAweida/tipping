import React, { useState } from "react";
import Button from "Components/Button";
import InputWithIcon from "Components/Textbox";
import person from "images/person.svg";
import bill from "images/dollar.svg";
import Custom from "Components/Custom";
import OutPutText from "Components/Outputtext";
import Reset from "Components/reset";
import "App.css";
interface buttonprops {}
export const InputLayout: React.FC<buttonprops> = () => {
  const [tipAmount, setTipAmount] = useState("0");
  const [total, setTotal] = useState("0");

  const resetCallback = (newValue: string) => {
    setTipAmount(newValue);
    setTotal(newValue);
  };
  return (
    <div className="Container">
      <div className="Input__container">
        <InputWithIcon icon={bill} label="bill" />
        <p>Select Tip %</p>
        <div className="Button__container">
          <Button symbol="5%" />
          <Button symbol="10%" />
          <Button symbol="15%" />
          <Button symbol="25%" />
          <Button symbol="50%" />
          <Custom />
        </div>
        <InputWithIcon icon={person} label="Number Of People" />
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

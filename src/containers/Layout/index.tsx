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
  let [customPercentage, setCustomPercentage] = useState<number>(0); // custom percentage
  let [perPerson, setperPerson] = useState<number>(0); //perperson to tip
  let [total, setTotal] = useState<number>(0); // total tip ammount;
  let [people, setPeoaple] = useState<number>(0); // how many people passed from child as props
  let [bill, setBill] = useState<number>(0); // the bill passed as props from child
  //for reset
  // useEffect --> run some code when some values are updated // dependencies array
  const resetCallback = (resetValue: number) => {
    setperPerson(resetValue);
    setTotal(resetValue);
  };
  let calculateTip = () => {
    total = bill * customPercentage;
    perPerson = total / people;
    setTotal(total);
    setperPerson(perPerson);
  };
  return (
    <div className="Container">
      <div className="Input__container">
        <TextInput
          totalForTip={calculateTip}
          userSetBill={(value) => setBill(value)}
          value={bill}
          icon={Bill}
          label="bill"
          iden="bill"
        />
        <p>Select Tip %</p>
        <div className="Button__container">
          <Button
            calculateTip={calculateTip}
            symbol="5%"
            percentage={0.05}
            setTipPercentage={setCustomPercentage}
          />
          <Button
            calculateTip={calculateTip}
            symbol="10%"
            percentage={0.1}
            setTipPercentage={setCustomPercentage}
          />
          <Button
            calculateTip={calculateTip}
            symbol="15%"
            percentage={0.15}
            setTipPercentage={setCustomPercentage}
          />
          <Button
            calculateTip={calculateTip}
            symbol="25%"
            percentage={0.25}
            setTipPercentage={setCustomPercentage}
          />
          <Button
            calculateTip={calculateTip}
            symbol="50%"
            percentage={0.5}
            setTipPercentage={setCustomPercentage}
          />

          <Custom
            userPercentage={(value) => setCustomPercentage(value)}
            value={customPercentage}
            totalForTip={calculateTip}
          />
        </div>
        <TextInput
          totalForTip={calculateTip}
          userSetBill={(value) => setPeoaple(value)}
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

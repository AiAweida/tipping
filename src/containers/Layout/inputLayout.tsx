import React, { useState, useEffect, useContext } from "react";
import Button from "Components/Button/button";
import Custom from "Components/Custom/custom";
import BillValue from "Components/billValue/billValue";
import PeopleNumber from "Components/PeopleNumber/PeopleNumber";
import "./inputlayout.css";
import { TextFeildContext } from "context";

interface InputLayoutProps {
  setvalues: (total: number, perperson: number) => void;
}
export const InputLayout: React.FC<InputLayoutProps> = ({ setvalues }) => {
  let [buttonValue, setButtonValue] = useState<number>(0);
  let [perPerson, setperPerson] = useState<number>(0);
  let [total, setTotal] = useState<number>(0);
  const { customPercent } = useContext(TextFeildContext);
  const { peoplenum } = useContext(TextFeildContext);
  const { billValue } = useContext(TextFeildContext);

  useEffect(() => {
    let percentValue: number = 0;
    if (customPercent !== "") {
      percentValue = parseInt(customPercent) / 100;
    }
    if (buttonValue > 0) {
      percentValue = buttonValue;
    }
    if (customPercent === "" && buttonValue === 0) {
      percentValue = 1;
    }
    total = billValue * percentValue;
    perPerson = total / peoplenum;
    setTotal(total);
    setperPerson(perPerson);
    setvalues(total, perPerson);
  }, [billValue, peoplenum, customPercent, buttonValue]);

  return (
    <div className="Container">
      <div className="Input__container">
        <p>Bill</p>
        <BillValue />
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
            setTipPercentage={(value) => setButtonValue(value)}
          />
          <Custom />
        </div>
        <p>Number Of People</p>
        <PeopleNumber />
      </div>
    </div>
  );
};

import React from "react";
import Button from "Components/Button/button";
import Custom from "Components/Custom/custom";
import BillValue from "Components/billValue/billValue";
import PeopleNumber from "Components/PeopleNumber/PeopleNumber";
import "./inputlayout.css";

export const InputLayout: React.FC = () => {
  return (
    <div className="Container">
      <div className="Input__container">
        <p>Bill</p>
        <BillValue />
        <p>Select Tip %</p>

        <div className="Button__container">
          <Button symbol="5%" percentage={0.05} />
          <Button symbol="10%" percentage={0.1} />
          <Button symbol="15%" percentage={0.15} />
          <Button symbol="25%" percentage={0.25} />
          <Button symbol="50%" percentage={0.5} />

          <Custom />
        </div>
        <p>Number Of People</p>
        <PeopleNumber />
      </div>
    </div>
  );
};

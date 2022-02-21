import * as React from "react";
import Button from "Components/Button";
import InputWithIcon from "Components/Textbox";
import person from "images/person.svg";
import bill from "images/dollar.svg";
import Custom from "Components/Custom";
import "App.css";
interface buttonprops {}
export const InputLayout: React.FC<buttonprops> = () => {
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
        {/* two output boxs and a reset button */}
      </div>
    </div>
  );
};

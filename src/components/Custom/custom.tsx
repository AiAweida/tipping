import React from "react";
import "./index.css";
interface functionProps {
  userPercentage: (newValue: number) => void;
  userInput: number;
  valueOfBill: number;
  totalForTip: (totalValue: number) => void;
}
const Custom: React.FC<functionProps> = ({
  userPercentage,
  userInput,
  valueOfBill,
  totalForTip,
}) => {
  return (
    <>
      <input
        onChange={(e) => {
          userInput = +e.target.value;
          userPercentage(userInput);
        }}
        onKeyDown={(e) => {
          if (e.code === "NumpadEnter") {
            totalForTip(valueOfBill * (userInput / 100));
          } else if (e.code === "Enter") {
            totalForTip(valueOfBill * (userInput / 100));
          }
        }}
        type="text"
        className="Custom"
        placeholder="custom"
      />
    </>
  );
};
export default Custom;

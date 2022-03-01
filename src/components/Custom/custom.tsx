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
  userInput = 1,
  valueOfBill,
  totalForTip,
}) => {
  return (
    <>
      <input
        onChange={(e) => {
          userInput = e.target.valueAsNumber;
          userPercentage(userInput);
        }}
        onKeyPress={(e) => {
          if (e.code === "Enter") {
            totalForTip(valueOfBill * (userInput / 100));
          }
        }}
        type="number"
        className="Custom"
        placeholder="custom"
      />
    </>
  );
};
export default Custom;

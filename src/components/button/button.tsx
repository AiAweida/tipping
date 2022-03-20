import React from "react";
import "./index.css";
interface functionProps {
  symbol: string;
  percentage: number;
  setTipPercentage: (newValue: number) => void;
}
// use just one props for both symbol and percenntagevalue
const Button: React.FC<functionProps> = ({
  symbol,
  percentage,
  setTipPercentage,
}) => {
  return (
    <button
      id={symbol}
      className="Button"
      value={percentage}
      onClick={() => {
        setTipPercentage(percentage);
      }}
    >
      {symbol}
    </button>
  );
};

export default Button;

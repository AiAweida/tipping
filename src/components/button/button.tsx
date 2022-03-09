import * as React from "react";
import "./index.css";
interface functionProps {
  symbol: string;
  percentage: number;
  setTipPercentage: (newValue: number) => void;
}
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

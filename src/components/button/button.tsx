import * as React from "react";
import "./index.css";
interface functionProps {
  symbol: string;
  percentage: number;
  setTipPercentage: (newValue: number) => void;
  calculateTip: () => void;
}
const Button: React.FC<functionProps> = ({
  calculateTip,
  symbol,
  percentage,
  setTipPercentage,
}) => {
  return (
    <button
      id={symbol}
      className="Button"
      value={percentage}
      onMouseDownCapture={() => {
        setTipPercentage(percentage);
      }}
      onMouseDown={() => {
        calculateTip();
      }}
      onChange={() => {
        calculateTip();
      }}
    >
      {symbol}
    </button>
  );
};

export default Button;

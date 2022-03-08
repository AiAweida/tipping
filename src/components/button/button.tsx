import * as React from "react";
import "./index.css";
interface functionProps {
  symbol: string;
  percentage: string;
  setTipPercentage: (newValue: string) => void;
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
      onMouseDownCapture={() => {
        setTipPercentage(percentage);
      }}
    >
      {symbol}
    </button>
  );
};

export default Button;

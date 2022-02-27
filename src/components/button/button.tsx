import * as React from "react";
import "./index.css";
interface functionProps {
  symbol: string;
  percentage: number;
  billValue: number;
  total: (newValue: number) => void;
}
const Button: React.FC<functionProps> = ({
  total,
  symbol,

  billValue,
  percentage,
}) => {
  return (
    <button
      id={symbol}
      className="Button"
      value={percentage}
      onClick={() => {
        total(billValue * percentage);
      }}
    >
      {symbol}
    </button>
  );
};

export default Button;
